// src/Login.js

import React, { useContext, useEffect, useRef, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";

import {  onAuthStateChanged } from "firebase/auth";
function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
 const email = useRef(null)
  const password = useRef(null)
  console.log("log in called")
  const navigate  = useNavigate();
  const handleLogin = async (e) => {
    
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
      console.log("User logged in Successfully");
      navigate("/")
      localStorage.setItem("userEmail",user.email)
      localStorage.setItem("uid",user.uid)
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Email or Password is Incorrect", {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  };
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("email" + user.email)
        console.log(localStorage.getItem("userEmail"))
        localStorage.setItem("userEmail",user.email)
        localStorage.setItem("uid",user.uid)
        // const uid = user.uid;
       navigate("/home")
      } else {
        localStorage.removeItem("userEmail")
        localStorage.removeItem("uid")
      
      }
    });
  },[])
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
               
              type="email"
              id="email"
              ref={email}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
             // value={email}
             placeholder='Enter Your Email'
             // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            
              type="password"
              id="password"
              ref={password}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder='Enter the Password'
             // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
