import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPJ7Bk8OGu90vb9ddb7EkXdYHX6xgcyxg",
  authDomain: "cheapeat-8fb79.firebaseapp.com",
  projectId: "cheapeat-8fb79",
  storageBucket: "cheapeat-8fb79.appspot.com",
  messagingSenderId: "21181822250",
  appId: "1:21181822250:web:ac3232de588ce6d89b9a53",
  measurementId: "G-VH0SNRH632"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
