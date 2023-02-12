import React from 'react'
import { AiFillStar } from 'react-icons/ai'
const Review = ({titolo,recensione,autore,voto, classes}) => {
  return (
    <article className={`${classes}` + " " +"recensione col-12 col-md-5 col-lg-4"}>
      <h4 className=''>{autore}</h4>
      <p>{recensione}</p>
      <span><AiFillStar />{voto}</span>
      <span>{titolo}</span>
      
    </article>
  )
}

export default Review