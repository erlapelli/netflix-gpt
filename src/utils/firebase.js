// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCBJXFtAmF9KndgAI1N5Tf53MQ8PpLtDs",
  authDomain: "netflixgpt-33d2f.firebaseapp.com",
  projectId: "netflixgpt-33d2f",
  storageBucket: "netflixgpt-33d2f.appspot.com",
  messagingSenderId: "574085115943",
  appId: "1:574085115943:web:229d4cb9a43196d4545e02",
  measurementId: "G-24J7X0C2ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);