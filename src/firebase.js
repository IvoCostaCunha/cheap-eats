import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCW8S4GY6_OwJaJv4SyuHwJt5iQWa4Ju7o",
  authDomain: "cheapeatpresentation.firebaseapp.com",
  projectId: "cheapeatpresentation",
  storageBucket: "cheapeatpresentation.appspot.com",
  messagingSenderId: "197966642426",
  appId: "1:197966642426:web:f445b79ede8b701681dd43",
  measurementId: "G-LHZWHBML9P"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);



export default app;
