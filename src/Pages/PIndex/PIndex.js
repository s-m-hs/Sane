import React , { useRef, useState } from 'react'
import './PIndex.css'
import SwiperCom from '../../Components/SwiperCom/SwiperCom'


export default function PIndex() {


  return (
    <div className='row' >
        <div className='container mt-5 pindex-swiper-container'>
            <div className='row pindex-swiper-row'>
                <div className='col pindex-swiper-col'>
                <SwiperCom/>

                     </div>
            </div>
        </div>

 </div>
  )
}
