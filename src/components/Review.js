import React from 'react'
import starCreator from '../utility/starCreator';
const Review = ({titolo,recensione,autore,voto, classes}) => {
  return (
    <article className={`${classes}` + " " +"recensione col-12 col-md-5 col-lg-4 animate__animated animate__bounceInLeft"}>
      <h4 className=''>{autore}</h4>
      <p>{recensione}</p>
      <span>{starCreator(voto)}</span>
      <span>{titolo}</span>
      
    </article>
  )
}

export default Review