import React from 'react'
import "./styles/button.css"


const Button = ( {getNewQuote} ) => {
  return (
    
      <button onClick={getNewQuote}><i className="fa-solid fa-arrow-right button-random "></i></button>
    
    
  )
}

export default Button