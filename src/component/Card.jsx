import React from 'react'
// import  { useState } from 'react'; sd
import "slick-carousel/slick/slick.css";
import data from '../data.json'
import "slick-carousel/slick/slick-theme.css";
// import bottle2 from '../assets/images/bottle2.png';
// import bottle3 from '../assets/images/bottle3.png';
// import bottle4 from '../assets/images/bottle4.png';
// import bottle5 from '../assets/images/bottle5.png';
import '../component/CardCss.css';
import { Link } from 'react-router-dom';
const Card = () => {
  // const [product,setProduct]=useState({
  //     img:bottle1,
  //     backGroundColor: `#f7f7f7`,
  //     prodName:`Black / Onyx`,
  //     price:`89`
  //   },)
  //   const slideItem = [
  //     { 
  //       id: "1",
  //       img: bottle1,
  //       backGroundColor: `#f7f7f7`,
  //       prodName:`Black / Onyx`,
  //       price:`89`
  //     },
  //     {
  //       id: "2",
  //       img: bottle2,
  //       backGroundColor: `#f8f8f6`,
  //       prodName:`White / Dune`,
  //       price:`120`
  //     },
  //     {
  //       id: "3",
  //       img: bottle3,
  //       backGroundColor: `#f6f8f8`,
  //       prodName:`White / Pebble`,
  //       price:`200`

  //     },
  //     {
  //       id: "4",
  //       img: bottle4,
  //       backGroundColor: `#f8faf5`,
  //       prodName:`Black / Pine`,
  //       price:`79`
  //     },
  //     {
  //       id: "5",
  //       img: bottle5,
  //       backGroundColor: `#fef1f0`,
  //       prodName:`White / Coral`,
  //       price:`99`
  //     }
  //   ]
  // const selBottle =(item)=>{
  //  setProduct({...product,img:item.img,backGroundColor:item.backGroundColor,prodName:item.prodName,price:item.price})
  //  console.log(product)
  // }
  //   const settings = {
  //     // dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1
  //   };
  return (
    <section className='sec vh-100' >
      <div className='container'>
        {data.map((product) => {
          return (
            <div className='card' key={product.id} style={{ backgroundColor: product.backGroundColor }}>
              <div className='proMedia'>
              <img src={product.image} alt='bottle1'/>
              </div>
              <div className='shopCard-content'>
                <div className='productTitle '>
                  <div className=' d-flex center'>
                    <h3 >LARQ Bottle Movement PureVis™</h3>
                    <span >{product.prodName}</span>
                  </div>
                </div>
                {/* <div className='prodSwiper'>
               {data.map((item) => (
                 <div className='productList' key={item.id}>
                   <button onClick=
                     {() =>selBottle(item)}>
                     <img src={item.img} alt={`bottle${item.id}`} />
                   </button>
                 </div>
               ))}
             </div> */}
                <div className='prodPrice'>
                  <span>From ${product.price}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Card;
