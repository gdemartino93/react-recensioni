import React, { useState } from 'react';
import {FcNext ,FcPrevious} from 'react-icons/fc';
import Review from './Review';
import data from '../data';
import { act } from 'react-dom/test-utils';
const Slider = () => {
  const [recensioni , setRecensioni] = useState(data);
  const [active , setActive] = useState(0);

  const nextSlide = () =>{
    setActive((oldValue) =>{
      if ( oldValue + 1 > recensioni.length -1){
        return 0;
      }else{
        return oldValue + 1
      }
    })
  }
  return (
    <div className='slider'>
      {
        recensioni.map((el,index) => {
          let classActive = "d-none";
          if ( active === index){
            classActive = "d-block"
          }
          return  <Review key={el.id} {...el} classes={classActive} />
              
        })
      }
      <div className='col-6 d-flex justify-content-between cmd-btn'>
        <a> <FcPrevious /> </a>
        <a> <FcNext onClick={nextSlide} /></a>
       
      </div>

    </div>
  )
}

export default Slider