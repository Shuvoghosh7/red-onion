// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPOm6eujCGk_Kb9Bfjo2ak8-FYFOhs4vo",
  authDomain: "red-onion-b5dcc.firebaseapp.com",
  projectId: "red-onion-b5dcc",
  storageBucket: "red-onion-b5dcc.appspot.com",
  messagingSenderId: "561311112253",
  appId: "1:561311112253:web:7c5cd047e97e714af75e54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth