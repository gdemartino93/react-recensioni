
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';

const starCreator = (num) =>{
    
    return Array.from({length : 5}, (el,index)=>{
        if ( num >= index + 1 ){
            return <BsStarFill key={index} className="star" />
        } else if (num >= index + 0.5) {
            return <BsStarHalf key={index} className="star" />
        } else{
            return <BsStar key={index} className="star" />
        }
    })
}
export default starCreator;