import React from 'react'
import logo from "./images/logo.png"
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Header=()=> {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async(user)=> {
      console.log(user);
      if(user!=null){
      const docRef = doc(db,"Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      }
      else {
        console.log("User is not logged in");
      }
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
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
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
