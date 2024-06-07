import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardPro from '../Cards/CardPro';
import './SwiperComB.css'
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function SwiperComB({title,sliderDetailProp}) {
  console.log(sliderDetailProp);

  return (
    <>
    <div className='swipercomb-div'>
          <span className='swipercomb-title'>{title}</span>
        <Swiper
            // loop={true}
        // slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
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
        modules={[Autoplay, Pagination, Navigation]}

        className="mySwiperB"
      >
        {sliderDetailProp.map(item=>
  <SwiperSlide><CardPro 
        imgSrc={item.img} title={item.title} price={item.price}
        /></SwiperSlide>
        )}
      
    
        
      </Swiper>
    
    </div>
  
    </>
  )
}
