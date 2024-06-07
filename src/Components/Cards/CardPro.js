import React from 'react'
import './CardPro.css'
import { Link } from 'react-router-dom'




export default function CardPro({imgSrc,title,price }) {
  return (
    <div className='cardpro-container centerc'>
        <img src={imgSrc} alt="" />
        <span className='cardpro-title'> {title} </span>
        {/* <span>368,000</span> */}
        <span className='cardpro-price'>{price}تومان </span>
        <div className='cardpro__icon-div centerr'>
        <i class="fa-solid fa-cart-plus " style={{color:'#14a5af'}} ></i>
        <i class="fa-solid fa-heart " style={{color:'#14a5af'}} ></i>

        </div>
<Link className='cardpro__link'>جزییات بیشتر...</Link>
        <div>

        </div>
        
        </div>
  )
}
