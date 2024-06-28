import React from 'react'

const PlayerCard = ({name,score}) => {
  return (
    <div className='w-[80%] flex  bg-black  '>
      <div className='basis-1/4 cardCss'>
     1
      </div>
      <div className='basis-1/2 cardCss'>
        {name}
      </div>
      <div className='basis-1/4 cardCss'>
      {score}
      </div>
    </div>
  )
}

export default PlayerCard
