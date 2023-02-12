import React, { useEffect, useState } from 'react';
import {FcNext ,FcPrevious} from 'react-icons/fc';
import Review from './Review';
import data from '../data';
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
  };
  const prevSlide = () => {
    setActive((oldValue) =>{
      if (oldValue -1 < 0){
        return recensioni.length -1;
      }else{
        return oldValue - 1
      }
    })
  };
  useEffect(()=>{
    let timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  },[active])
  return (
    <div className='slider'>
      {
        recensioni.map((el,index) => {
          let classActive = "d-none ";
          if ( active === index){
            classActive = "d-block "
          }
          return  <Review key={el.id} {...el} classes={classActive} />
              
        })
      }
      <div className='col-12 col-md-5 col-lg-4 d-flex justify-content-between cmd-btn'>
        <a> <FcPrevious onClick={prevSlide} /> </a>
        
        <a> <FcNext onClick={nextSlide}  /></a>
       
      </div>

    </div>
  )
}

export default Slider