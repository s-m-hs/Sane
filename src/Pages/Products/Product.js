import React from 'react'
import './Product.css'
import ProductDetailL from '../../Components/ProductDetail/ProductDetailL'
import ProducyDetailRight from '../../Components/ProductDetail/ProducyDetailRight'
export default function Product() {


  return (
    <div className='container product-container'>

<div className="row product-row">
  <div className="col-md-3 product-right-col"><ProducyDetailRight/></div>
  <div className="col-md-9 product-left-col"><ProductDetailL/></div>
  
</div>
      </div>
  )
}
