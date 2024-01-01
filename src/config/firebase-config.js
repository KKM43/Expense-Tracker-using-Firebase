import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBRPCrdnHqev19k4pvPKNIzmhtRbGkt6KQ",
  authDomain: "expense-track-e63a7.firebaseapp.com",
  projectId: "expense-track-e63a7",
  storageBucket: "expense-track-e63a7.appspot.com",
  messagingSenderId: "1064670683156",
  appId: "1:1064670683156:web:f120b62bb2ea4621158701"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new  GoogleAuthProvider();
export const db =getFirestore(app);