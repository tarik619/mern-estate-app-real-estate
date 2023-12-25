// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6bd50.firebaseapp.com",
  projectId: "mern-estate-6bd50",
  storageBucket: "mern-estate-6bd50.appspot.com",
  messagingSenderId: "930270780663",
  appId: "1:930270780663:web:57ee04b9270ac4f23407f2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
