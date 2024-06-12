import React, { useState } from 'react'
import './CardCat.css'
import { Link, useParams } from 'react-router-dom'

export default function CardCat({imgSrc,category,id}) {
  
  return (
    <div className='cardcat-container centerc'>


<Link class="circle-wrapper centerc" to={`${category}/${id}`}>
<img className='cardcat__img' src={imgSrc} alt="" />

    <div class="success circle">
        
    </div>

  </Link>





    </div>
  )
}
