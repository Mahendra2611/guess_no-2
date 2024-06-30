// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiYGXz0oqfmjDe9a328BbGqSbxuAG2LVI",
  authDomain: "gamehive-2f331.firebaseapp.com",
  projectId: "gamehive-2f331",
  storageBucket: "gamehive-2f331.appspot.com",
  messagingSenderId: "455531984818",
  appId: "1:455531984818:web:bebcab94095053cc6316ab"
};
console.log("fire abse called")
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// to help us in registration
export const auth=getAuth();

export const db=getFirestore(app);

export default app;