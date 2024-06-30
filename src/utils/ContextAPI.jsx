import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { auth } from "../component/firebase";
const intialState = {
    score: 1000,
    gameOver:false,
    number:Math.floor(Math.random()*1000),
    userName:null,
    IsAuthenticated:false,
    
}
export const GlobalContext = createContext(intialState)
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);
    console.log("global called")
    function reduceScore(n) {
        dispatch({
            type: "REDUCE_SCORE",
            payload: n,
        })
    }
    function resetScore(){
        dispatch({
            type:"RESET_SCORE",
        })
    }
    function generateNumber(){
        dispatch({
            type:"GENERATE_NUMBER",
        })
    }
    function GameOverState(id){
        dispatch({
            type:"GAME_OVER",
           payload:id
        })
    }
   
    function handleStorageChange(id){
        dispatch({
          type: "SET_AUTH",
          payload: id,
        });
      };
    
    
    return <GlobalContext.Provider value={{
        score: state.score,
        gameOver:state.gameOver,
        number:state.number,
        userName:state.userName,
        IsAuthenticated:state.IsAuthenticated,
        handleStorageChange,
        reduceScore,
        GameOverState,
        resetScore,
        generateNumber,
    }}>
        {children}
    </GlobalContext.Provider>
}
export default GlobalProvider