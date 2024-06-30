import React, { useContext,useEffect } from 'react'
import { GlobalContext } from '../utils/ContextAPI'
import { useNavigate } from 'react-router-dom'
import LOST from "../IMG/6.png"
import WIN from "../IMG/back_01.jpeg.jpg"
import { db } from '../component/firebase'
import { updateDoc,doc,getDoc } from 'firebase/firestore'
const GameOver = () => {
  const { score ,resetScore,gameOver} = useContext(GlobalContext)
  const uid = localStorage.getItem("uid")
  console.log("game over called")
  const navigate = useNavigate();
  const updateFireStore = async()=>{
    const docRef = doc(db, "Users", uid)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().score);
      if(docSnap.data().score < score){
        await updateDoc(docRef, {
          score:score
        });
      }
    } else {
      console.log("No such document!");
    }
   }
  const handleRestart = () => {
    resetScore();
    navigate("/body")
  }
  const handleGoBack = () => {
    resetScore();
    navigate("/")
  }
  const handleScoreCard = () => {
    resetScore()
    navigate("/leaderboard")
  }
  useEffect(() => {
    if (!gameOver) {
      navigate("/");
    }
    else{
      updateFireStore();
    }
  }, [gameOver, navigate]);
  return (
    <div className=' flex flex-col h-[100vh]  items-center justify-around py-[8%] sm:py-[3%]' style={{backgroundImage:`url(${score == 0 ? LOST : WIN})`,backgroundPosition:"center",backgroundSize:"cover"}}>
      <div className='wongame px-2 py-2'>
        Your Score - {score}
      </div>
      {/* <div className='wongame font-bold text-4xl'>
        YOU  {score == 0 ? "LOST" : "WON"} THE GAME
      </div> */}
      <div className='flex gap-4 sm:gap-12' >
        <button onClick={handleScoreCard} className='wongame'>
          SCORECARD
        </button>
        <button onClick={handleRestart} className='wongame'>
          RESTART
        </button>
        <button onClick={handleGoBack} className='wongame'>
          GO BACK
        </button>
      </div>
    </div>
  )
}

export default GameOver
