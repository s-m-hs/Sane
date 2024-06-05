import React , { useRef, useState } from 'react'
import './PIndex.css'
import SwiperCom from '../../Components/SwiperCom/SwiperCom'
import BCatItem from '../../Components/Body/BCatItem/BCatItem'


export default function PIndex() {


  return (
    <div className='row' >
        <div className='container mt-5 pindex-swiper-container'>
            <div className='row pindex-swiper-row'>
                <div className='col pindex-swiper-col'>
                <SwiperCom/>
<BCatItem/>
                     </div>
            </div>
        </div>

 </div>
  )
}
