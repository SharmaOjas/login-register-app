// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBlEOKLxydiJCRbmlSZpUTWmasErUs8m4",
  authDomain: "login-signup-c1b89.firebaseapp.com",
  projectId: "login-signup-c1b89",
  storageBucket: "login-signup-c1b89.firebasestorage.app",
  messagingSenderId: "773684725423",
  appId: "1:773684725423:web:73d62626b3c388f160365a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 