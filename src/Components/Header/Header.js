import React from 'react'
import './Header.css'


export default function Header() {
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
          <li>کیبرد
            <ul className='header-bottom__col__ul__ul__ul'>
              <li>کیبرد1</li>
              <li>کیبرد2</li>
              <li>کیبرد3</li>
            </ul>
          </li>
          <li>هدفون</li>
          <li>اسیکر</li>
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
