import React from 'react'
import { useEffect } from 'react';
import { collection, addDoc, orderBy } from "firebase/firestore";

const AddData = () => {
    console.log("AddData called")
   

    // const add = async()=>{
    //     try {
    //       const docRef = await addDoc(collection(db, "users"), {
    //         name: "Mahendra ",
    //         score:0,
    //         gamePlayed:12
    //       });
    //       console.log("Document written with ID: ", docRef.id);
    //       localStorage.setItem("StoreId",docRef.id);
    //     } catch (e) {
    //       console.error("Error adding document: ", e);
    //     }
    //   }
    //   useEffect(()=>{
    //     console.log("add called")
    //   readData();
    //   },[])
  return (
    <div>
      
    </div>
  )
}

export default AddData
