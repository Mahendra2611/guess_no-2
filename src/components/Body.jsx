import React, { useEffect } from 'react'
import GuessNumber from './GuessNumber'
import { GlobalContext } from '../utils/ContextAPI';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG3 from "../IMG/back22.png"
import LeaderBoard from './LeaderBoard';
const Body = () => {
  const {score} = useContext(GlobalContext);
  console.log("score changed")
  const navigate = useNavigate();
  const handleScoreCard = ()=>{
    navigate("/leaderboard")
   }
  //  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
  return (
    <div className='w-screen h-screen ' style={{backgroundImage:`url(${IMG3})`,backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat:"no-repeat"}}>
      <GuessNumber/>
      <div>
      <div className='float-right  my-[19%] sm:my-[2%] mx-[2%] sm:mx-[7%]  py-2 px-2 rounded-lg font-semibold text-sm sm:text-2xl bg-gradient-to-r from-pink-500 to-yellow-500 '>
        Score - {score}
      </div>
      <div onClick={handleScoreCard} className='float-left  my-[19%] sm:my-[2%] mx-[2%] sm:mx-[7%] py-2 px-2 rounded-lg font-semibold text-sm sm:text-2xl bg-gradient-to-r from-pink-500 to-yellow-500 '>
        ScoreCard
      </div>
      </div>
      
    </div>
  )
}

export default Body
