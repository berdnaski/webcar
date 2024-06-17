import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhsQzs6hQuV1p2SWjLnp06qWHR8NmLhzI",
  authDomain: "webcar-559e8.firebaseapp.com",
  projectId: "webcar-559e8",
  storageBucket: "webcar-559e8.appspot.com",
  messagingSenderId: "1069740271946",
  appId: "1:1069740271946:web:cdc9eb4daee54d445df9b3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };