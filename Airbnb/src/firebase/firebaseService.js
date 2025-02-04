// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmGEb5FYxZiGBmoIDXaHxl4DDtpII8NYY",
  authDomain: "kashecoworking.firebaseapp.com",
  projectId: "kashecoworking",
  storageBucket: "kashecoworking.firebasestorage.app",
  messagingSenderId: "995565828353",
  appId: "1:995565828353:web:fff372dd8257e688d14300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {firestore,auth, provider, signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword};