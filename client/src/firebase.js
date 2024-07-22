// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-87aff.firebaseapp.com",
  projectId: "mern-estate-87aff",
  storageBucket: "mern-estate-87aff.appspot.com",
  messagingSenderId: "889328384545",
  appId: "1:889328384545:web:a7aa445d82ef9ed62f0160"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);