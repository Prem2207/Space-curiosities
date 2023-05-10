import React from 'react'
import Button from './Button'
import "./styles/container.css"


const Container = ({ quote, getNewQuote }) => {


  return (


    <section className='containerinfo'>

      <h1 className='containerinfo__title'>
        Infogalax
      </h1>
      
      <article className='containerinfo__phrase'>
        <p>{quote.phrase}</p>
      </article >
     
      
      <Button getNewQuote={getNewQuote} />
      
      

      <article className='containerinfo__author'>
      
      <p>
      
        {quote.author}</p>
      </article>

    </section>


  )
}

export default Container