// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyA-9spbSM2c1POY5jzz-8DsPLcivniPY",
  authDomain: "movie-app-47849.firebaseapp.com",
  projectId: "movie-app-47849",
  storageBucket: "movie-app-47849.appspot.com",
  messagingSenderId: "475691661225",
  appId: "1:475691661225:web:516ab23e5c751ecedbf6b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)