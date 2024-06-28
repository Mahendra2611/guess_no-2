// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  //we created env environment to hide key from git use
  apiKey: "AIzaSyAs8pYyV_JgqmdslS_ZTNmpz2AhlX9esCU",
  authDomain: "login-auth-52745.firebaseapp.com",
  projectId: "login-auth-52745",
  storageBucket: "login-auth-52745.appspot.com",
  messagingSenderId: "432991178686",
  appId: "1:432991178686:web:cd2e74f55901d477e4f3ef",
  measurementId: "G-R7528YB2RB"
};


const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app)
export const db = getFirestore(app);
// export const auth = getAuth(app)