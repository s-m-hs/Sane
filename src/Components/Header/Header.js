import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


export default function Header() {
const [flag,setFlag]=useState(false)
const [flag2,setFlag2]=useState(false)
const [flag3,setFlag3]=useState(false)

const onmousHandle=(e)=>{
  if(e.target.value==0){
    setFlag(true)
    setFlag2(false)
    setFlag3(false)
  }
 else if(e.target.value==2){
    setFlag2(true)
    setFlag(false)
    setFlag3(false)
  }else if(e.target.value==4){
    setFlag3(true)
    setFlag(false)
    setFlag2(false)

  }
  console.log('first')
  // console.log(e.target.value)
  // setFlag(prev=>!prev)
  // return()=>setFlag(false)
  // console.log(flag)

}



  return (
    <div className='container Header'>

      <div className='row Header-top mt-3 centerr'>
        <div className="col-12 col-md-8 Header-rightSide centerr ">
          <div className='Header-rightSide__div-img'>
            <img className='Header-rightSide__img' src="../../images/photo_2024-05-30_19-08-29.jpg" alt="" />
            </div>

        </div>
        <div className="col-12 col-md-4 Header-leftSide centerr">
        <div className='Header-leftSide__div centerr'> <i class="fa-solid fa-bag-shopping fa-xl"style={{color:'#ffffff'}}  ></i></div>
          <div className='Header-leftSide__div centerr'> <i class="fa-solid fa-magnifying-glass fa-xl"  style={{color:'#ffffff'}} ></i>    </div>
          <div className='Header-leftSide__div centerr'> <i class="fa-regular fa-user fa-xl" style={{color:'#ffffff'}}></i></div>

          
                <div className="col-lg-4 Header-leftSide__number-div centerr">
            <span>02191005457</span>
            <i class="fa-solid fa-phone" style={{color:'#ffffff'}}></i>
            </div>
           
        </div>
      </div>

  

<div className="row header-bottom">
  <div className="col  header-bottom__col">
  <ul className='header-bottom__col__ul centerr'>
        <li className='arrow-icon'>دسته بندی ها
        <ul className='header-bottom__col__ul__ul centerc '>
          <li value={0} onMouseEnter={onmousHandle} className={flag ? 'liiii2-a' :'liiii2' } >لوازم جانبی 
          <div className='header-bottom__col__ul__ul__ul centerr'>
            <div className={flag ? 'a' : 'b'}>
              {/* <span className='header-bottom__col__ul__ul__ul__link'>sadsd</span> */}
              <Link className='header-bottom__col__ul__ul__ul__link2'>کیبرد</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>هدفون</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>اسپیکر</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>اسپیکر</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>اسپیکر</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>اسپیکر</Link>
            </div>
            </div>
          </li>
          <li value={2} onMouseEnter={onmousHandle} className={flag2 ? 'liiii2-a' :'liiii2' }>سخت افزار
          <div className='header-bottom__col__ul__ul__ul centerr'>
            <div className={flag2 ? 'a' : 'b'}>

               <Link className='header-bottom__col__ul__ul__ul__link2'>هارد</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>رم</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>سی پی یو</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>مادربرد</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>پاور</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>کیس</Link>
            </div>
              
            
         
              </div>
          </li>
          <li value={4} onMouseEnter={onmousHandle} className={flag3 ? 'liiii2-a' :'liiii2' }>لپ تاپ 
          <div className='header-bottom__col__ul__ul__ul centerr'>
            <div  className={flag3 ? 'a' : 'b'}>

               <Link className='header-bottom__col__ul__ul__ul__link2'>adasd</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>asdasd</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>سی پی asd</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>مادربرد</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>پاور</Link>
              <Link className='header-bottom__col__ul__ul__ul__link2'>کیس</Link>
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
