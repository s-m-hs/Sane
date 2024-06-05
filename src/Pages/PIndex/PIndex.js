import React , { useRef, useState } from 'react'
import './PIndex.css'
import SwiperCom from '../../Components/SwiperCom/SwiperCom'
import BCatItem from '../../Components/Body/BCatItem/BCatItem'
import SwiperComB from '../../Components/SwiperComB/SwiperComB'


export default function PIndex() {


  return (
    <div className='row' >
        <div className='container mt-5 pindex-swiper-container'>
            <div className='row pindex-swiper-row'>
                <div className='col pindex-swiper-col'>
                <SwiperCom/>
<BCatItem/>
<SwiperComB title={'پرفروش ترین ها'}/>

                     </div>
            </div>
        </div>

 </div>
  )
}
