import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCps1gQo49lK0s_Ez99zV0w8vl0K9otBvk",
  authDomain: "cheapeatpresentation17.firebaseapp.com",
  projectId: "cheapeatpresentation17",
  storageBucket: "cheapeatpresentation17.appspot.com",
  messagingSenderId: "907343021668",
  appId: "1:907343021668:web:9d47da7499db2431ac8171",
  measurementId: "G-TLX1ERZQ1Z"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);



export default app;
