import React from 'react'

const Popup = ({gameStatus,word,reset}) => {
    
    if(!gameStatus)
    return

    
  return (
    <div className='popup'>
        <p>You {gameStatus}</p>
        <p>The word is {word}</p>
        <button className='button-45' onClick={reset}>Play again?</button>

        </div>
  )
}

export default Popup