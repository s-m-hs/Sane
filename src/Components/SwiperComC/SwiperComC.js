import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { TypeAnimation } from 'react-type-animation';

// Import Swiper styles
import './SwiperComC.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function SwiperComC() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const items = [
    '#ffffff',
    // '#030303',
    // '#14a5af',
   
  ];
  const [textColor, setTextColor] = useState(()=>{
    return items[Math.floor(Math.random() * items.length)]
  });

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  return (
    <>
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
        className="mySwiperC"
      >

<TypeAnimation
// omitDeletionAnimation={true}

  sequence={['مجموعه صانع بزگترین عرضه کننده ملزومات رایانه در استان قم',() =>  setTextColor('aqua'),
     'با بیش از 20 سال سابقه در زمینه فروش ملزومات صنعت IT', 500,() => setTextColor('darkkhaki'),
     'در خدمت شما همشهریان گرامی میباشد', 500,() => setTextColor('deeppink'),]}
  style={{ fontSize: '4em',position:'absolute',zIndex:'5' , right:10,top:0,color:textColor}}
  repeat={Infinity}
/> 


        <SwiperSlide>
            <div style={{width:'100%',height:'100%'}}>
            {/* <TypeAnimation
            speed={75}
  sequence={['مجموعه صانع بزگترین عرضه کننده ملزومات رایانه در استان قم', 500, 'با بیش از 20 سال سابقه در زمینه فروش ملزومات صنعت IT', 500, 'در خدمت شما همشهریان گرامی میباشد', 500]}
  style={{ fontSize: '2em',position:'absolute',zIndex:'5' , right:0,color:'white'}}
  repeat={Infinity}
/>  */}
<img style={{position:'absolute',zIndex:'2',width:'100%',height:'100%'}} src="../../images/photo_2024-06-07_23-49-30.jpg"  alt="" />
            </div>
           </SwiperSlide>
        <SwiperSlide><img src="../../images/photo_2024-06-08_00-04-05.jpg"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/4.jpg"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/6.jpg"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/7.jpg"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../images/5.jpg"  alt="" /></SwiperSlide>
      
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    
    </>
  
  )
}
