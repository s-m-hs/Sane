import React from 'react'
import './Product.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import ProductDetailL from '../../Components/ProductDetail/ProductDetailL'
import ProducyDetailRight from '../../Components/ProductDetail/ProducyDetailRight'
export default function Product() {


  return (
    <div className='container product-container'>

<div className="row product-row">
  <div className="col-md-3 product-right-col"><ProducyDetailRight/></div>
  <div className="col-md-9 product-left-col"><ProductDetailL/></div>
  
</div>
<div className='row'>
  <div className="col product-tab-div">

  <Tabs
        defaultActiveKey="home"
        id="fill-tab-example"
        className="mb-2"
        // fill
        // onSelect={ffc}
      // onClick={()=>ffc(id)}
      >
        <Tab eventKey="home" title="مشخصات" style={{ background: 'inherit' }}>
        <table className='table mt-5 table-striped '>
<tbody>
     <tr key="">
          <th>ارگونومی</th>
          <td>متقارن</td>
          {/* <button className='btn btn-danger'></button> */}
        </tr>

        <tr key="">
          <th>عمر مفید سوئیچ‌ها
          </th>
          <td>20 میلیون کلیک
          </td>
        </tr>
        
        <tr key="">
          <th>سازنده سوئیچ‌ها
          </th>
          <td>LK</td>
        </tr>

        <tr key="">
          <th>تعداد کلیدها
          </th>
          <td>8
          </td>
        </tr>

        <tr key="">
          <th>نوع سنسور
          </th>
          <td>اپتیکال</td>
        </tr>

        <tr key="">
          <th>حداکثر میزان دقت (حساسیت)
          </th>
          <td>6200DPI</td>
        </tr>

        <tr key="">
          <th>حداکثر سرعت
          </th>
          <td>160IPS</td>
        </tr>

        <tr key="">
          <th>نوع نورپردازی

          </th>
          <td>RGB</td>
        </tr>

        <tr key="">
          <th>نوع اتصال

          </th>
          <td>با سیم
          </td>
        </tr>

        <tr key="">
          <th>طول کابل 
          </th>
          <td>1.8 متر
          </td>
        </tr>
</tbody>
     
        
      </table>        </Tab>

        <Tab eventKey="longer-tab" title="نظرات کاربران" style={{ background: 'inherit' }}>
        </Tab> 

      </Tabs>

    
  </div>
</div>

      </div>
  )
}
