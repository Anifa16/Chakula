import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4-yfxvd4SyhZC5ECiSyfp4nxYEzh53C4",
    authDomain: "chakula-19676.firebaseapp.com",
    projectId: "chakula-19676",
    storageBucket: "chakula-19676.appspot.com",
    messagingSenderId: "361357984270",
    appId: "1:361357984270:web:2f3efd5e432628c9d8725f"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
//Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);