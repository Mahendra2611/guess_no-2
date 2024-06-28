import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const intialState = {
    score: 1000,
    gameOver:false,
    number:Math.floor(Math.random()*1000)
}
export const GlobalContext = createContext(intialState)
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);
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
    return <GlobalContext.Provider value={{
        score: state.score,
        gameOver:state.gameOver,
        number:state.number,
        reduceScore,
        GameOverState,
        resetScore,
        generateNumber
    }}>
        {children}
    </GlobalContext.Provider>
}
export default GlobalProvider