import React, { useState } from 'react'
import Review from './Review'
import data from '../data';
const Slider = () => {
  const [recensioni , setRecensioni] = useState(data);
  console.log(recensioni);
  return (
    <div className='slider'>
      {
        recensioni.map(el => {
          return  <Review key={el.id} {...el} />
        })
      }
      {/* <Review titolo= "nome"  /> */}
    </div>
  )
}

export default Slider