import React, { useEffect, useState, useRef,useMemo } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import apiUrl from '../../utils/apiUrl';
import {Autoplay, EffectCube, Pagination } from 'swiper/modules';








export default function Header() {
  const [valeS,setValue]=useState(1)
  const [mainCategory,setMainCategory]=useState({}) 



const getCategoryById=()=>{
  let obj={
    gid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    id: 2,
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
// console.log(imgSrcProp);



////////////////////////////
useEffect(()=>{
  getCategoryById()
  // console.log(mainCategory.childs[0].imageUrl)
},[])

  const onmousHandle = (e) => {
    if(e.target.value){
      setValue(e.target.value)
    }
  }



  return (
    <div className='container Header'>


 <div className='row Header-top  centerr'>
  <div className="col-12 col-md-8 Header-rightSide centerr ">
    <div className='Header-rightSide__div-img'>

    <div style={{ width:'135px',height:'105px'}}>

    <>
      <Swiper
     
          loop={true}
       autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={ true}
        modules={[Autoplay,EffectCube, Pagination,]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../images/photo_2024-05-30_19-08-29.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../images/photo_2024-05-30_19-08-24.jpg"  />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="../../images/1005639-خنده-دار-اقامت-ربات-سفید.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="../../images/1480096-فروش-برچسب-50٪-تخفیف.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
</div>

      {/* <img className='Header-rightSide__img' src="../../images/photo_2024-05-30_19-08-29.jpg" alt="" /> */}

    </div>



  </div>
  <div className="col-12 col-md-4 Header-leftSide centerr">
    <div className='Header-leftSide__div centerr'> <i class="fa-solid fa-bag-shopping fa-xl" style={{ color: '#ffffff' }}  ></i></div>
    <div className='Header-leftSide__div centerr'> <i class="fa-solid fa-magnifying-glass fa-xl" style={{ color: '#ffffff' }} ></i>    </div>
    <div className='Header-leftSide__div centerr'> <i class="fa-regular fa-user fa-xl" style={{ color: '#ffffff' }}></i></div>


    <div className="col-lg-4 Header-leftSide__number-div centerr">
      <span>02191005457</span>
      <i class="fa-solid fa-phone" style={{ color: '#ffffff' }}></i>
    </div>

  </div>
</div>


    
      <div className="row header-bottom">
        <div className="col  header-bottom__col">
          <ul className='header-bottom__col__ul centerr'>
            <li className='arrow-icon'>دسته بندی ها
              <ul className='header-bottom__col__ul__ul centerc '>

 <li  value={1}
  onMouseEnter={onmousHandle}
className={valeS==1 ? 'liiii2-a' : 'liiii2'}
>لوازم جانبی
  <div className='container header-bottom__col__ul__ul__ul centerr'>
    <div 
    className={valeS==1 ? 'row-cols-6 ishover' : ' nohover'}
    >

{ mainCategory.childs && mainCategory.childs.map((item,index)=>
  <Link className='header-bottom__col__ul__ul__ul__link2' to={'category'}>
        <img src={item.imageUrl} alt="" />
        {item.text} 
        
      </Link>
)}

    </div>
  </div>
</li>


               
                <li  value={2} onMouseEnter={onmousHandle}
                className={valeS==2 ? 'liiii2-a' : 'liiii2'}
                >سخت افزار
                  <div className='container header-bottom__col__ul__ul__ul centerr'>
                    <div 
                       className={valeS==2 ? 'row-cols-4 ishover' : ' nohover'}
                    >

                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/hard .jpg" alt="" />
                        هارد</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/hard ext.jpg" alt="" />
                        هارد اکسترنال</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/rom.jpg" alt="" />
                        رم</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/cpu.jpg" alt="" />
                        سی پی یو</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/main.jpg" alt="" />
                        مادربرد</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/cooler.jpg" alt="" />
                        خنک کننده</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/power.jpg" alt="" />
                        پاور</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/kase.jpg" alt="" />
                        کیس</Link>
                    </div>



                  </div>
                </li>
                <li  value={4} onMouseEnter={onmousHandle}
                className={valeS==4 ? 'liiii2-a' : 'liiii2'}
                > مبدل ها
                  <div className='container header-bottom__col__ul__ul__ul centerr'>
                    <div 
                      className={valeS==4 ? 'row-cols-4 ishover' : ' nohover'}>

                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/pci.jpg" alt="" />
                        کارت ها </Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/vga.jpg" alt="" />

                        VGA</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/hdmi.jpg" alt="" />
                        HTMI </Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/display.jpg" alt="" />
                        DISPLAY PORT</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/sound.jpg" alt="" />
                        SOUND</Link>
                    </div>



                  </div>
                </li>
                <li  value={6} onMouseEnter={onmousHandle} 
                className={valeS==6 ? 'liiii2-a' : 'liiii2'}
                >لپ تاپ
                  <div className='container header-bottom__col__ul__ul__ul centerr'>
                    <div 
                     className={valeS==6 ? 'row-cols-4 ishover' : ' nohover'}>

                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/asus.jpg" alt="" />

                        ASUS</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/lenovo.jpg" alt="" />

                        LENOVO</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/hp.jpg" alt="" />

                        HP</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/acer.jpg" alt="" />

                        ACER</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/microsoft.jpg" alt="" />

                        MICROSOFT</Link>
                    </div>



                  </div>
                </li>

              </ul>
            </li>
            <li>فروش اقساط</li>
            <li>خدمات</li>
            <li>درباره ما</li>
          </ul>
        </div>
      </div>


    </div>

  )
}
