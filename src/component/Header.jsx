import React from 'react'
import logo from "./images/logo.png"
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../utils/Loader';
const Header=()=> {
  const [userDetails, setUserDetails] = useState(null);
console.log("header called")
  const fetchUserData = () => {
    onAuthStateChanged(auth,async(user)=> {
      console.log(user);
      if(user!=null){
      const docRef = doc(db,"Users", user.uid);
      const docSnap = await getDoc(docRef);
      localStorage.setItem("userEmail",user.email)
      localStorage.setItem("uid",user.uid)
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      }
      else {
        console.log("User is not logged in");
      }
    }
    else{
      console.log("user doesnt exist")
    }
    });
  };
  
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      console.log(userDetails);
      await auth.signOut();
      localStorage.removeItem("userEmail")
      localStorage.removeItem("uid")
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return userDetails==null?<Loader/> : (
    <div>
      <div className="bg-black  text-white p-3 flex justify-between items-center">
     <a href="/">
     <img src={logo} className="h-14 w-auto"/>
     </a> 
      <nav className="flex space-x-4">
      {userDetails ? 
      (  
         <>
     <div className="inline-block bg-black text-white font-bold text-xl px-6 py-3 no-underline hover:underline hover:underline-offset-4 hover:decoration-white">
      {userDetails.userName}
    </div>  
    <button onClick={handleLogout} className="inline-block bg-black text-white font-bold text-xl px-6 py-3 no-underline hover:underline hover:underline-offset-4 hover:decoration-white">
      LogOut
    </button>
    </>
      )
      :
      (
    <a href="/login" className="inline-block bg-black text-white font-bold text-xl px-6 py-3 no-underline hover:underline hover:underline-offset-4 hover:decoration-white">
      Login
      </a>
      )
      }
      </nav>
    </div>
    </div>
  )
}

export default Header
