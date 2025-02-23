// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq6QRB4bqDkPUkWspfaE5LHi8a7AnWe_M",
  authDomain: "fabrica-app-react.firebaseapp.com",
  projectId: "fabrica-app-react",
  storageBucket: "fabrica-app-react.firebasestorage.app",
  messagingSenderId: "259930149429",
  appId: "1:259930149429:web:2173175f62a6430b81977c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
