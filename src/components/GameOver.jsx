import React, { useContext,useEffect } from 'react'
import { GlobalContext } from '../utils/ContextAPI'
import { useNavigate } from 'react-router-dom'
import LOST from "../IMG/6.png"
import WIN from "../IMG/back_01.jpeg.jpg"
const GameOver = () => {
  const { score ,resetScore,gameOver} = useContext(GlobalContext)
  console.log("game over called")
  const navigate = useNavigate();
  
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
  }, [gameOver, navigate]);
  return (
    <div className='h-screen flex flex-col   items-center justify-between py-[8%] sm:py-[3%]' style={{backgroundImage:`url(${score == 0 ? LOST : WIN})`,backgroundPosition:"center",backgroundSize:"cover"}}>
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
