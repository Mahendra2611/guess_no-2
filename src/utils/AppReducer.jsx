export default (state,action)=>{
    switch(action.type){
        case 'REDUCE_SCORE' : return {
            ...state,
            score:state.score-action.payload,
        }
        case "GAME_OVER":return{
            ...state,
            gameOver:action.payload,
        }
        case "RESET_SCORE":return{
            ...state,
            number:Math.floor(Math.random()*1000),
            score:1000
        }
        case "GENERATE_NUMBER":return{
            ...state,
            number:Math.floor(Math.random()*1000)
        }
        default:return {
            state
        }
    }
}