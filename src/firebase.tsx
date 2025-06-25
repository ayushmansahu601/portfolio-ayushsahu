// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAbaEpCWDdWMafO-ke2hN9zNJIi_jPB3A",
  authDomain: "portfolio-ayush-74e26.firebaseapp.com",
  projectId: "portfolio-ayush-74e26",
  storageBucket: "portfolio-ayush-74e26.firebasestorage.app",
  messagingSenderId: "89364185966",
  appId: "1:89364185966:web:4a9c8c7a06108960b6377f",
  measurementId: "G-FSTK0KKN2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);