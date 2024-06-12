import React, { useState,useEffect,useRef } from 'react'
import './Category.css'
import { Link, useParams } from 'react-router-dom'
import apiUrl from '../../utils/apiUrl'
import CardCat from '../../Components/Cards/CardCat'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


export default function Category() {
    const param=useParams()

    const [mainCategory,setMainCategory]=useState({}) 
  
    const getCategoryById=()=>{
        let obj={
          gid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          id: param.id,
          str: "string"
        }
      async function myAppGet(){
        const res=await fetch(`${apiUrl}/api/CyCategories/GetItemWChildAndRoot`,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json' 
          },
          body:JSON.stringify(obj)
        }).then(res=>{
          console.log(res) 
          return res.json()
        }).then(
          result=>{
            // console.log(result)
            setMainCategory(result)
            console.log(mainCategory)  
            
          }
        )
      } 
      myAppGet()
      }
console.log(param)
//////////////////////////////
useEffect(()=>{
    if(param.id !==null){    
        getCategoryById() 
 
    }

},[param])

 
  return (



    <div className='container category centerr'>
    <div className='row row-cols-6 category-row centerr'>

{mainCategory.childs &&   mainCategory.childs.map((item,index)=>

    <>
   <div className='category__cart-div centerc'>
   <CardCat imgSrc={item.imageUrl} category={`category`} id={item.id}/>
   <span>{item.text} </span>
   </div>
    </>


)}



    </div>
    <div className='row'>
        <div className='cols-6'>

<>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </>

        </div>
    </div>
    
   </div>
  )
}
