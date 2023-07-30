// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK7woUIjGE2I2UTsaf6QOBDx4o1u4q3i0",
  authDomain: "journal-app-8b044.firebaseapp.com",
  projectId: "journal-app-8b044",
  storageBucket: "journal-app-8b044.appspot.com",
  messagingSenderId: "683632914492",
  appId: "1:683632914492:web:5a2df2b4ad400d83bc5339"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
