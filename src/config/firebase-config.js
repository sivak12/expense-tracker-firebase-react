// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAURNdKkJw_bbRfJ-iOlyV567aJvcGnNg",
  authDomain: "expense-tracker-b0530.firebaseapp.com",
  projectId: "expense-tracker-b0530",
  storageBucket: "expense-tracker-b0530.appspot.com",
  messagingSenderId: "776561409941",
  appId: "1:776561409941:web:75121c273e0b0d73abc09c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
