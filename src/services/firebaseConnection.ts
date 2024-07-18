import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVBFA1JPcp59jgao_OoiGJWVH9VMxdD6c",
  authDomain: "web-car-4bc09.firebaseapp.com",
  projectId: "web-car-4bc09",
  storageBucket: "web-car-4bc09.appspot.com",
  messagingSenderId: "757451692352",
  appId: "1:757451692352:web:04d7811a832141255d42a5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };