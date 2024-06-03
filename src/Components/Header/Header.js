import React, { useEffect, useState, useRef } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
// import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import DecodeAnimation from "react-decode-animation";






const TEXTS = ["", "به فروشگاه صانع", "بزرگترین مجموعه فروش ملزومات وقطعات رایانه ای ", "خوش آمدید:)"];

export default function Header() {
  const [flag, setFlag] = useState(false)
  const [flag2, setFlag2] = useState(false)
  const [flag3, setFlag3] = useState(false)
  const [flag4, setFlag4] = useState(false)
  const ref = useRef(null);
  const [textIndex, setTextIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  const onmousHandle = (e) => {



    if (e.target.value == 0) {
   setFlag(true)
   setFlag2(false)
   setFlag3(false)
   setFlag4(false)


    }
    else if (e.target.value == 2) {
      setFlag(false)
      setFlag2(true)
      setFlag3(false)
      setFlag4(false)

    } else if (e.target.value == 4) {
      setFlag(false)
      setFlag2(false)
      setFlag3(true)
      setFlag4(false)
    } else if (e.target.value == 6) {
      setFlag(false)
   setFlag2(false)
   setFlag3(false)
   setFlag4(true)
    }
  }



  return (
    <div className='container Header'>

      <div className='row Header-top mt-3 centerr'>
        <div className="col-12 col-md-8 Header-rightSide centerr ">
          <div className='Header-rightSide__div-img'>
            <img className='Header-rightSide__img' src="../../images/photo_2024-05-30_19-08-29.jpg" alt="" />

            {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'خوش آمدید به ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'کامپیوتر صانع',
        1000,
     
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /> */}
          </div>
          {/* <div style={{margin:'auto',color:'rgb(116 117 117)',fontSize:'25px'}}>
			<DecodeAnimation
				ref={ref}

				autoplay // will play when rendered
				text={"به کامپیوتر صانع خوش آمدید"}
			/>
		
		</div> */}

          <h1 style={{ margin: 'auto', color: 'rgb(116 117 117)' }}>
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[textIndex % TEXTS.length]}{" "}
            </TextTransition>
          </h1>

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
                <li  value={0}
                  onMouseEnter={onmousHandle}
                className={flag ? 'liiii2-a' : 'liiii2'}
                >لوازم جانبی
                  <div className='container header-bottom__col__ul__ul__ul centerr'>
                    <div 
                    className={flag ? 'row-cols-4 ishover' : ' nohover'}
                    >
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/download.jpg" alt="" />
                        کیبرد

                      </Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/headphon.jpg" alt="" />
                        هدفون</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/speaker.jpg" alt="" />
                        اسپیکر</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/mouse.jpg" alt="" />
                        موس</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/headphon.jpg" alt="" />
                        هدفون بی سیم</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/key&mouse.jpg" alt="" />
                        کیبرد وموس</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/flash).jpg" alt="" />
                        فلش و رم ریدر</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/powerbonk.jpg" alt="" />
                        پاوربانک</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/mousepad.jpg" alt="" />
                        موس پد</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/kable.jpg" alt="" />
                        کابل</Link>
                      <Link className='header-bottom__col__ul__ul__ul__link2'>
                        <img src="../../images/bag.jpg" alt="" />
                        کیف</Link>
                    </div>
                  </div>
                </li>
                <li  value={2} onMouseEnter={onmousHandle}
                className={flag2 ? 'liiii2-a' : 'liiii2'}
                >سخت افزار
                  <div className='container header-bottom__col__ul__ul__ul centerr'>
                    <div 
                       className={flag2 ? 'row-cols-4 ishover' : ' nohover'}
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
                className={flag3 ? 'liiii2-a' : 'liiii2'}
                > مبدل ها
                  <div className='container header-bottom__col__ul__ul__ul centerr'>
                    <div 
                      className={flag3 ? 'row-cols-4 ishover' : ' nohover'}>

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
                className={flag4 ? 'liiii2-a' : 'liiii2'}
                >لپ تاپ
                  <div className='container header-bottom__col__ul__ul__ul centerr'>
                    <div 
                     className={flag4 ? 'row-cols-4 ishover' : ' nohover'}>

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
