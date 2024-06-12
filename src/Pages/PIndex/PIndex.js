import React , { useRef, useState } from 'react'
import './PIndex.css'
import SwiperCom from '../../Components/SwiperCom/SwiperCom'
import BCatItem from '../../Components/Body/BCatItem/BCatItem'
import SwiperComB from '../../Components/SwiperComB/SwiperComB'
import SwiperComC from '../../Components/SwiperComC/SwiperComC'



export default function PIndex() {
  const imgSrc=["../../images/headphon.jpg","../../images/speaker.jpg","../../images/mouse.jpg","../../images/powerbonk.jpg","../../images/هدفون بی سیم.jpg","../../images/download.jpg","../../images/flash).jpg","../../images/key&mouse.jpg","../../images/mousepad.jpg","../../images/kable.jpg","../../images/bag.jpg","../../images/اسپیکر پورتابل.jpg"]
const imgsrc2= ["../../images/cpu.jpg","../../images/rom.jpg","../../images/main.jpg","../../images/hard .jpg","../../images/cooler.jpg","../../images/kase.jpg","../../images/power.jpg","../../images/modem.jpg","../../images/12400 tray.jpg","../../images/modemtp.jpg","../../images/adata.jpg","../../images/cpu.jpg",]
const sliderDetail=[
  {img:"../../../images/products/c8f4ce37fea7a15300a2264c73b4ccd925d20dac_1697010738.jpg",title:'هدفون بی سیم',price:'327,000'},
  {img:"../../../images/products/d2c991565182fb5bdc10abd2576e454d9f54ad10_1685442773.jpg",title:' موس A4Teach ',price:'468,000'},
  {img:"../../../images/products/اسپیکر-شارژی-و-بلوتوثی-بیکارو-Beecaro-GF403-1.jpg",title:' اسپیکرشارژی Tsco',price:'1,035,000'},
  {img:"../../../images/products/2-2.jpg",title:'فلش Silicon Power 32G  ',price:'327000'},
  {img:"../../../images/products/photo_2024-06-05_11-57-13.jpg",title:'فندکی ProOne 4511',price:'225,000'},
  {img:"../../../images/products/cc742884e4d73df3da5ac70491a84e171361a061_1688487305.jpg",title:'پایه موبایل HunKi',price:'535,000'},
  {img:"../../../images/products/45f44d125ebd0405d6f4827b2a47f5674c0eef09_1640430945.jpg",title:'هدفون بی سیم Tsco',price:'836,000'},
  {img:"../../../images/products/04892b84e1c0f235822724ff6e92c4d55ca7523d_1707223995.jpg",title:' ایرپاد Samsung ',price:'935,000'},
]
const sliderDetail2=[
  {img:"../../../images/products/mypass.jpg",title:'MyPass 1T',price:'3,320,000'},
  {img:"../../../images/products/spower2t.jpg",title:'Silicon Power 2T',price:'5,360,000'},
  {img:"../../../images/products/980proo.jpg",title:'nvme pro 980 512G  ',price:'3,270,000'},
  {img:"../../../images/products/adata.jpg",title:'  adata 2t ',price:'4,680,000'},
  {img:"../../../images/products/modemtp.jpg",title:'TPlink 9960',price:'1,327000'},
  {img:"../../../images/products/green aria.jpg",title:'Green Aria',price:'2,225,000'},
  {img:"../../../images/products/lexar 512.jpg",title:'Lexar 512g',price:'2,335,000'},
  {img:"../../../images/products/main610.jpg",title:'ASUS H610 MA-WIFI',price:'5,320,000'},
  {img:"../../../images/products/12400 tray.jpg",title:' intel 12400 ',price:'7,935,000'},]
  return (
    <div className='row' >
        <div className='container mt-5 pindex-swiper-container'>
            <div className='row pindex-swiper-row'>
                <div className='col pindex-swiper-col'>
                <SwiperCom/>
<BCatItem />
<SwiperComB title={'پرفروش ترین ها'} sliderDetailProp={sliderDetail}/>
<BCatItem imgSrcProp={imgsrc2} />
<SwiperComB title={'پرفروش ترین های سخت افزار'} sliderDetailProp={sliderDetail2}/>
<SwiperComC/>



<div>
  
  asdasdasd
  
</div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

                     </div>
            </div>
        </div>

 </div>
  )
}
