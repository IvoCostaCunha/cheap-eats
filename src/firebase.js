import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJTNDlhZ9F0FSYBUs2EStkhYN9MpgIORA",
  authDomain: "cheapeat1999.firebaseapp.com",
  projectId: "cheapeat1999",
  storageBucket: "cheapeat1999.appspot.com",
  messagingSenderId: "1031745457107",
  appId: "1:1031745457107:web:ee756d4c2df327fa9bfd26",
  measurementId: "G-8PLCLW8BTP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
