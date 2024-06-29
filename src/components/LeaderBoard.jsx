import React, { useContext, useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import AddData from './AddData';
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from '../component/firebase';
import { GlobalContext } from '../utils/ContextAPI';
import { toast } from 'react-toastify';
const LeaderBoard = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [data, setData] = useState([]);
  console.log("userEmail " + userEmail);

  const readData = async () => {
    const q = query(collection(db, "Users"), orderBy("score", "desc"));
    
    let arr = [];
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        arr.push(doc.data());
      });
    }
    catch (error) {
      if (error.message.includes('Failed to get document because the client is offline') ||error.message.includes('net::ERR_INTERNET_DISCONNECTED')) {
        console.log(error.message);
        toast.error("No Connection", {
          position: "bottom-center",
          autoClose: 2000,
        })
      } else {
        console.log(error.message);
        toast.error("Email or Password is Incorrect", {
          position: "bottom-center",
          autoClose: 2000,
        })
  };
  }
    setData(arr);
    console.log(arr);
  };
  
  useEffect(() => {
    console.log("add called");
    readData();
  }, []);

  return (
    
    <div className='bg-red-800 w-full h-[100%] flex flex-col '>
      <h1 className='text-xl sm:text-5xl m-auto pt-[5%] text-amber-500 sm:font-bold'>LEADERBOARD</h1>
      <div className='flex flex-col gap-4 pt-[3%] px-[20%] '>
      <div className=' text-center text-orange-400'>
      {data.filter((doc) => doc.email === userEmail).map((doc,index) => (
        <PlayerCard key={doc.email} {...doc}  rank={data.findIndex(doc => doc.email === userEmail) }  />
      ))}
      </div>
      <div className='hide-scrollbar text-center h-[100%] text-cyan-700 overflow-y-scroll '>
      {data.map((doc,index) => (
        <PlayerCard key={doc.email} {...doc} rank={index} />
      ))}
      </div>
      </div>
        
    </div>
  );
};

export default LeaderBoard;
