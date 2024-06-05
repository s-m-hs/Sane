import React from 'react'
import './CardPro.css'
import { Link } from 'react-router-dom'




export default function CardPro() {
  return (
    <div className='cardpro-container centerc'>
        <img src="../../../images/products/c8f4ce37fea7a15300a2264c73b4ccd925d20dac_1697010738.jpg" alt="" />
        <span className='cardpro-title'>هدفون بی سیم</span>
        {/* <span>368,000</span> */}
        <span className='cardpro-price'>327,000 تومان</span>
        <div className='cardpro__icon-div centerr'>
        <i class="fa-solid fa-cart-plus fa-xl" style={{color:'#14a5af'}} ></i>
        <i class="fa-solid fa-heart fa-xl" style={{color:'#14a5af'}} ></i>

        </div>
<Link className='cardpro__link'>جزییات بیشتر...</Link>
        <div>

        </div>
        
        </div>
  )
}
