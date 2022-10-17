// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDvF9e3iyCYKFfAokIISd0JivHhwnT_d1k",
  authDomain: "ksproject-1.firebaseapp.com",
  projectId: "ksproject-1",
  storageBucket: "ksproject-1.appspot.com",
  messagingSenderId: "186469982371",
  appId: "1:186469982371:web:642812d285ba6f25631f16",
  measurementId: "G-4J69EK6V5V"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export default Firebase;