import React from 'react'
import IMG1 from "../IMG/rank_1.jpg"
import IMG2 from "../IMG/rank_2.jpg"
import IMG3 from "../IMG/rank_3.jpg"
const PlayerCard = ({userName,score,rank}) => {
  return (
    <div className=' sm:w-[100%] flex  bg-black  '>
      <div className='basis-1/4 text-center m-auto cardCss'>
     {rank==0?<img className='w-6 h-6 m-auto' src={IMG1}/>:rank == 1?<img className='w-6 h-6 m-auto' src={IMG2}/>:rank==2?<img className='w-6 h-6 m-auto' src={IMG3}/>: rank+1}
      </div>
      <div className='basis-1/2 cardCss text-wrap'>
        {userName}
      </div>
      <div className='basis-1/4 cardCss'>
      {score}
      </div>
    </div>
  )
}

export default PlayerCard
