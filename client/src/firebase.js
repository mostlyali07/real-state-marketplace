// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ab442.firebaseapp.com",
  projectId: "mern-estate-ab442",
  storageBucket: "mern-estate-ab442.appspot.com",
  messagingSenderId: "550168508311",
  appId: "1:550168508311:web:a3097766a1da1fced3b6d2",
  // apiKey: "AIzaSyAYuwCE0EN82ssHWdeT9FE098zZF-ubQPM",
  // authDomain: "real-estate-f87b2.firebaseapp.com",
  // projectId: "real-estate-f87b2",
  // storageBucket: "real-estate-f87b2.appspot.com",
  // messagingSenderId: "799257060398",
  // appId: "1:799257060398:web:8431778827fbe5c3b76bbf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
