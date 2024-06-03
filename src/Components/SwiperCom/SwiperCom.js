import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './SwiperCom.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function SwiperCom() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
    loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
                <SwiperSlide><img src="../../images/1716709858-JGyzwBKMcFnB1hwC.webp"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/5c1368231b513102c4a36cd6451fc754ac1f0e27_1717321983.webp"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/1716709629-A16kTiqMKXJgrkGg.webp"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/1716709827-KEhJoJJI1Hu7tK1z.webp"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/1716709786-ghYx4RfUKFUkwARR.webp"  alt="" /></SwiperSlide>

        <SwiperSlide><img src="../../images/1716709656-b2UJGmutxkbOq1iV.webp"  alt="" /></SwiperSlide>       
         <SwiperSlide><img src="../../images/1716709720-4rJpWx6QonnC9gKx.webp"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/1716709753-eoa35FOD8ndk4hZB.webp"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/1717333598-Dfzufas1vPjEoxC2.webp"  alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
  )
}
