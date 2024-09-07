// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export const auth = getAuth();