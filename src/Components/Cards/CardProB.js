import React from 'react'
import { Link } from 'react-router-dom'
import './CardProB.css'


export default function cardprobB({imgSrc,title,price }) {
  return (
    <div className=' cardprob-container centerc'>
    <img src={imgSrc} alt="" />
    <span className='cardprob-title'> {title} </span>
    {/* <span>368,000</span> */}
    <span className='cardprob-price'>{price}تومان </span>
    <div className='cardprob__icon-div centerr'>
    <i class="fa-solid fa-cart-plus " style={{color:'#14a5af'}} ></i>
    <i class="fa-solid fa-heart " style={{color:'#14a5af'}} ></i>

    </div>
<Link className='cardprob__link'>جزییات بیشتر...</Link>
    <div>

    </div>
    
    </div>  )
}

