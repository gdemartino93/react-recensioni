import React from 'react'
import { AiFillStar } from 'react-icons/ai'
const Review = ({titolo,recensione,autore,voto}) => {
  return (
    <article className='recensione'>
      <h4>{autore}</h4>
      <p>{recensione}</p>
      <span><AiFillStar />{voto}</span>
      <span>{titolo}</span>
    </article>
  )
}

export default Review