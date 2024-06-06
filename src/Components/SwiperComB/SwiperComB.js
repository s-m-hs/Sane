import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardPro from '../Cards/CardPro';
import './SwiperComB.css'
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function SwiperComB({title}) {

  return (
    <>
    <div className='swipercomb-div'>
          <span className='swipercomb-title'>{title}</span>
        <Swiper
            loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
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
        <SwiperSlide><CardPro 
        imgSrc={"../../../images/products/c8f4ce37fea7a15300a2264c73b4ccd925d20dac_1697010738.jpg"} title={'هدفون بی سیم'} price={'327,000'}
        /></SwiperSlide>
      <SwiperSlide><CardPro 
        imgSrc={"../../../images/products/d2c991565182fb5bdc10abd2576e454d9f54ad10_1685442773.jpg"} title={' موس A4Teach '} price={'468,000'}
        /></SwiperSlide>
        <SwiperSlide><CardPro 
        imgSrc={"../../../images/products/اسپیکر-شارژی-و-بلوتوثی-بیکارو-Beecaro-GF403-1.jpg"} title={' اسپیکرشارژی Tsco'} price={'1,035,000'}
        /></SwiperSlide>
        <SwiperSlide><CardPro 
        imgSrc={"../../../images/products/2-2.jpg"} title={'فلش Silicon Power 32G  '} price={'327000'}
        /></SwiperSlide>
        <SwiperSlide><CardPro 
        imgSrc={"../../../images/products/photo_2024-06-05_11-57-13.jpg"} title={'  فندکی ProOne 4511'} price={'225,000'}
        /></SwiperSlide>
        <SwiperSlide><CardPro 
        imgSrc={"../../../images/products/cc742884e4d73df3da5ac70491a84e171361a061_1688487305.jpg"} title={'پایه موبایل HunKi'} price={'535,000'}
        /></SwiperSlide>
        <SwiperSlide><CardPro 
        imgSrc={"../../../images/products/45f44d125ebd0405d6f4827b2a47f5674c0eef09_1640430945.jpg"} title={'هدفون بی سیم Tsco'} price={'836,000'}
        /></SwiperSlide>
        <SwiperSlide><CardPro 
        imgSrc={"../../../images/products/04892b84e1c0f235822724ff6e92c4d55ca7523d_1707223995.jpg"} title={' ایرپاد Samsung '} price={'935,000'}
        /></SwiperSlide>
        
      </Swiper>
    
    </div>
  
    </>
  )
}
