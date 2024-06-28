import React, { useEffect, useState } from 'react'
import PlayerCard from './PlayerCard'
import AddData from './AddData'
import { collection, query, getDocs ,orderBy} from "firebase/firestore";
// import {db} from "../utils/FireStore"
const LeaderBoard = () => {
  const [data,setData] = useState([]);
 // console.log(data)
  const readData = async()=>{
    
    const q = query(collection(db, "users"), orderBy("score","desc"));
    
    const querySnapshot = await getDocs(q);
    //setData(querySnapshot)
    let arr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log( doc.data());
      arr.push(doc.data())
    });
    setData(arr);
    console.log(arr)
    }
    useEffect(()=>{
      console.log("add called")
    readData();
    },[])
  return (
    <div className='bg-red-800 w-screen h-screen'>
      <PlayerCard/>
    {data.map((doc)=>{
      return <PlayerCard {...doc}/>
    })}
    </div>
  )
}

export default LeaderBoard
