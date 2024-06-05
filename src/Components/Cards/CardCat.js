import React from 'react'
import './CardCat.css'
import { Link } from 'react-router-dom'

export default function CardCat({imgSrc}) {
  return (
    <div className='cardcat-container centerc'>


<Link class="circle-wrapper centerc">
<img className='cardcat__img' src={imgSrc} alt="" />

    <div class="success circle">
        
    </div>




    {/* <div class="icon">
      <i class="fa fa-check"></i>
    </div> */}
  </Link>





    </div>
  )
}
