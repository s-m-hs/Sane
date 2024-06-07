import React from 'react'
import CardCat from '../../Cards/CardCat'
import './BCatItem.css'

export default function BCatItem({imgSrcProp}) {


console.log(imgSrcProp);

  return ( 
    <div className='container bcatitem centerr'>
        <div className='row row-cols-6'>

{imgSrcProp.map((item,index)=>
  <CardCat imgSrc={imgSrcProp[index]}/>

)}



        </div>

       </div>
  )
}
