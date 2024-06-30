import React, { useContext, useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from '../utils/ContextAPI'
import CustomButton from './CustomButton'
//import PlayingGame from './PlayingGame'
import { useNavigate } from 'react-router-dom'

const GuessNumber = () => {
    const InpRef = useRef(null)
    console.log("Guess Number Called")
    const [msg, setMsg] = useState("Game Started");
    const { reduceScore, score, GameOverState,number ,gameOver} = useContext(GlobalContext);
    const navigate = useNavigate()
    console.log(number)
    console.log(gameOver)
        const notify = ()=>toast(msg, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    const checkNumber = (e) => {
        console.log(InpRef.current.value)
        if (score == 0 || InpRef.current.value == "") {
            e.preventDefault();
            if (InpRef.current.value == "") {
                setMsg(`Enter the Correct Value `);
                
                console.log("enter the value")
            }
            else {
                console.log("you lost the game")
                GameOverState(true);

                navigate("/gameover")
            }
        }
        else if (number == InpRef.current.value) {
            console.log("you gusssed it right  ")
            GameOverState(true);
            navigate("/gameover")
        }
        else if (number > InpRef.current.value) {
            console.log("you unumber is less ")
            setMsg("your number is less ")
           
            reduceScore(50);
        }
        else {
            console.log("your number is greater")
            setMsg("your number is greater")
            
            reduceScore(50);
        }
    }
   useEffect(()=>{
    notify();
   },[msg,score])
    return (
        <div className='   h-[40%] sm:h-[70%] w-full flex flex-col gap-[10%] pt-[32%] sm:pt-[8%] items-center'>
            <div className='text-red-600 font-mono font-bold uppercase text-xl sm:text-2xl  '>
            <ToastContainer/>
            </div>
            <div className='  flex flex-col gap-4 sm:gap-10 justify-center items-center'>
                <h1 className=' text-white text-xl sm:font-bold sm:text-5xl font-serif'>Guess the Number between 1-1000</h1>
                <input type='number' className='px-2 py-2 rounded-sm' ref={InpRef} placeholder='Enter the number' />
                
                <CustomButton onClick={checkNumber}>CHECK </CustomButton>
                
        </div>
</div>
    )
}
 
export default GuessNumber
