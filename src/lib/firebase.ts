// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwdyPNjkh4tGiFsFhIlvQ7uiVi4bCJHkI",
  authDomain: "portfolio-ayushsahu-e519e.firebaseapp.com",
  projectId: "portfolio-ayushsahu-e519e",
  storageBucket: "portfolio-ayushsahu-e519e.firebasestorage.app",
  messagingSenderId: "827128920721",
  appId: "1:827128920721:web:d0664ca9c8f4cb7c8a9d30",
  measurementId: "G-3EJNF7KE28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
