import React from 'react'
import logo from "./images/logo.png"
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../utils/Loader';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../utils/ContextAPI';
const Header=({userDetails})=> {
   const {IsAuthenticated,handleStorageChange} = useContext(GlobalContext)
   console.log(IsAuthenticated)
console.log("header called" + userDetails?.email)

  async function handleLogout() {
    try {
      console.log(userDetails);
      await auth.signOut();
      localStorage.removeItem("userEmail")
      localStorage.removeItem("uid")
      //addUserName(false);
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
useEffect(()=>{
  if(userDetails != null && IsAuthenticated == false){
    handleStorageChange(true);
  }
},[userDetails])
  return  (
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
      {userDetails?.userName}
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
