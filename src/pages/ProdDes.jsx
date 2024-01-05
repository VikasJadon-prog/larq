import React from 'react'
import bottle1 from '../assets/images/bottle1.png';
import bottle4 from '../assets/images/bottle4.png';
import bottle5 from '../assets/images/bottle5.png';
import { useState } from 'react';
import '../pages/ProdDes.css';

import Rating from '@mui/material/Rating';
const ProdDes = () => {

  const [product, setProduct] = useState({
    img: bottle1,
    backGroundColor: `#f7f7f7`,
    prodName: `Black / Onyx`,
    price: `89`
  },)

  const [value, setValue] = React.useState(2);
  return (
    <section className='des-sec'>
      <div className='des-row'>
        <div className='des-proImg'>
          <div className='desImg-con'>
            <img src={bottle1} alt='des-img' />
          </div>
        </div>
        <div className='des-cart'>
          <div className='carCon-title'>
            <h1>LARQ Bottle Movement PureVis™</h1>
          </div>
          <div className='head-price'>
            <span>$99.00</span>
          </div>
          <div className='cart-rat'>
            <Rating name="half-rating" className='rating' defaultValue={2.5} precision={0.5} />
            <span>30 reviews</span>
          </div>
          <div className='cart-fea'>
            <div className='cart-siz-head'>Insulated</div>
            <div className='car-fea-bt'>
              <button><div></div><div className='feature'><h7>Insulated</h7><br />
                <span>24 hours cold or 12 hours hot</span></div></button>
              <button><div></div><div><h7>Insulated</h7>
                <br />
                <span>24 hours cold or 12 hours hot</span></div></button>
            </div>


          </div>
          <div className='cart-siz'>
            <div className='cart-siz-head'>Size</div>
            <div className='car-size-bt'>
              <button><span>23 oz</span></button>
              <button><span>34 oz</span></button>
            </div>
          </div>
          <div className='cart-pro-col'>
            <div className='cart-siz-head'>Black /Onyx</div>
            <div className='item-btn'>
              <button className='bt-Item '></button>
              <button className='bt-Item' style={{ backgroundColor: "#e5e8e7", color: "#aaa493" }}></button>
              <button className='bt-Item' style={{ backgroundColor: "#e5e8e7", color: "#aaa493" }}></button>
            </div>

          </div>
          <div className='chec-btn'>
            <button>Add to cart-$99.00</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProdDes
