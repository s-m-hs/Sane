import React, { useRef, useState } from 'react';
import './SwiperComD.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'; 

export default function ProducyDetailR() {
  return (
    <div>
         <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiperD"
      >
        <SwiperSlide>
          <img src="../../images/products/mouse/2021-9-a4tech-bloody-a60-652d0606eb21a6b54f50b1c9.webp" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="../../images/products/mouse/2021-9-a4tech-bloody-a60-left-652d06068716201626d0f36e.webp" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="../../images/products/mouse/2021-9-a4tech-bloody-a60-left-side-652d0605eb21a6b54f50b1c1 (1).webp" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="../../images/products/mouse/2021-9-a4tech-bloody-a60-left-side-652d0605eb21a6b54f50b1c1.webp" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="../../images/products/mouse/2021-9-a4tech-bloody-a60-bottom-652d06058716201626d0f36a.webp" />
        </SwiperSlide>
      </Swiper>
  
    </div>
  )
}
