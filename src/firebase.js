import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBqaFjZqyCAx0oB6w4xNcpoYM4kZBQTfSM",
  authDomain: "cheapeat-e3946.firebaseapp.com",
  projectId: "cheapeat-e3946",
  storageBucket: "cheapeat-e3946.appspot.com",
  messagingSenderId: "702524261903",
  appId: "1:702524261903:web:d76cb8146752510420457a",
  measurementId: "G-Q7K0SDGTKZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
