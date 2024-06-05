import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardPro from '../Cards/CardPro';
import './SwiperComB.css'
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
export default function SwiperComB({title}) {
  return (
    <>
    <div className='swipercomb-div'>
          <span className='swipercomb-title'>{title}</span>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiperB"
      >
        <SwiperSlide><CardPro/></SwiperSlide>
        <SwiperSlide><CardPro/></SwiperSlide>
        <SwiperSlide><CardPro/></SwiperSlide>
        <SwiperSlide><CardPro/></SwiperSlide>
        <SwiperSlide><CardPro/></SwiperSlide>
        <SwiperSlide><CardPro/></SwiperSlide>
        <SwiperSlide><CardPro/></SwiperSlide>
        <SwiperSlide><CardPro/></SwiperSlide>
        <SwiperSlide><CardPro/></SwiperSlide>
        <SwiperSlide><CardPro/></SwiperSlide>
        
      </Swiper>
    
    </div>
  
    </>
  )
}
