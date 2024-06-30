import React, { useEffect, useState } from "react";
import Header from './component/Header';
import { auth, db } from './component/firebase';
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { Outlet } from 'react-router-dom';
import Loader from "./utils/Loader";

const AppChild = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchUserData = () => {
    onAuthStateChanged(auth, async (user) => {
      try {
        console.log("on auth app child");
        if (user != null) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          localStorage.setItem("userEmail", user.email);
          localStorage.setItem("uid", user.uid);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
            console.log(docSnap.data());
          } else {
            console.log("User is not logged in");
          }
        } else {
          localStorage.removeItem("userEmail");
          localStorage.removeItem("uid");
          console.log("user doesn't exist");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Unable to load Data", {
          position: "bottom-center",
          autoClose: 2000,
        })
      } finally {
        setLoading(false); // Set loading to false after fetching data or error
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <div>
      <Header userDetails={userDetails} />
      <Outlet />
    </div>
  );
}

export default AppChild;
