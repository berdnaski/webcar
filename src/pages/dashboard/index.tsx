import { FiTrash } from "react-icons/fi";
import { Container } from "../../components/container";
import { DashboardHeader } from "../../components/panelheader";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { AuthContext } from "../../contexts/AuthContext";

interface CarProps {
    id: string;
    name: string;
    year: number;
    price: number;
    city: string;
    uid: string;
    km: number;
    images: ImageCarProps[];
}

interface ImageCarProps {
    name: string;
    uid: string;
    url: string;
}

export function Dashboard() {
    const [cars, setCars] = useState<CarProps[]>([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        function loadCars() {
            if(!user?.uid) {
                return;
            }

            const carsRef = collection(db, "cars");
            const queryRef = query(carsRef, where("uid", "==", user.uid));

            getDocs(queryRef)
                .then((snapshot) => {
                    let listCars = [] as CarProps[];

                    snapshot.forEach( doc => {
                        listCars.push({
                            id: doc.id,
                            name: doc.data().name,
                            year: doc.data().year,
                            price: doc.data().price,
                            city: doc.data().city,
                            uid: doc.data().uid,
                            km: doc.data().km,
                            images: doc.data().images
                        })
                    })

                    setCars(listCars);
                    console.log(listCars);
                })
        }

        loadCars();
    }, [user]);

    return (
        <Container>
            <DashboardHeader />

            <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <section className="w-full bg-white rounded-lg relative">
                    <button 
                        onClick={ () => {} }
                        className="absolute bg-white w-14 h-14 rounded-full flex items-center justify-center right-2 top-2 drop-shadow"
                    >
                        <FiTrash size={26} color="#000" />
                    </button>
                    <img
                        className="w-full rounded-lg mb-2 max-h-70"
                        src="https://firebasestorage.googleapis.com/v0/b/webcar-559e8.appspot.com/o/images%2FbCb0wUttYTMPVMEWt51gfZcLJpw1%2F0ff1041c-50a7-42af-818d-e04dfa916cf7?alt=media&token=49d4ef01-172e-4c6f-ab3d-220f4ea1cd64"
                    />

                    <p className="font-bold rounded-lg mb-2 max-h-70">NISSAN VERSA</p>

                    <div className="flex flex-col px-2">
                        <span className="text-zinc-700">
                            Ano 2016/2016 | 230.000 km
                        </span>

                        <strong className="text-black font-bold mt-4">R$ 150.000</strong>
                    </div>

                    <div className="w-full h-px bg-slate-200 my-2"></div>
                        <div className="px-2 pb-2">
                            <span className="text-black">
                                Campo Grande - MS
                            </span>
                        </div>
                </section>
            </main>
        </Container>
    )
}