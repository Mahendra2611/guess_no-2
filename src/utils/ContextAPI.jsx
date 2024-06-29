import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { auth } from "../component/firebase";
const intialState = {
    score: 1000,
    gameOver:false,
    number:Math.floor(Math.random()*1000),
    userName:null,
    IsAuthenticated:localStorage.getItem("userEmail") == null?false:true,
    isOffline:false,
}
console.log(intialState)
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
    function addUserName(name){
        dispatch({
            type:"ADD_USER_NAME",
            id:name
        })
    }
    function handleOfflineOnline(id){
        dispatch({
            type:"HANLDE_OFFLINE",
            id:id
        })
    }
    useEffect(()=>{
       const handleOffline = ()=>{ handleOfflineOnline(true)
        }
       const handleOnline = ()=>{
            handleOfflineOnline(false);
        }
        window.addEventListener("offline",handleOffline);
        window.addEventListener("online",handleOnline);
    },[])
    return <GlobalContext.Provider value={{
        score: state.score,
        gameOver:state.gameOver,
        number:state.number,
        userName:state.userName,
        IsAuthenticated:state.IsAuthenticated,
        isOffline:state.isOffline,
        reduceScore,
        GameOverState,
        resetScore,
        generateNumber,
        addUserName
    }}>
        {children}
    </GlobalContext.Provider>
}
export default GlobalProvider