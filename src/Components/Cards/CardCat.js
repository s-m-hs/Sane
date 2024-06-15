import React, { useState } from 'react'
import './CardCat.css'
import { Link, useParams } from 'react-router-dom'

export default function CardCat({imgSrc,category,id,changeIdProp}) {

  
  return (
    <div className='cardcat-container centerc'>

 <Link class="circle-wrapper centerc" to={category ? `${category}/${id}` : ''} onClick={changeIdProp} >
<img className='cardcat__img' src={imgSrc} alt="" />

    <div class="success circle">
        
    </div>

   </Link> 






    </div>
  )
}
