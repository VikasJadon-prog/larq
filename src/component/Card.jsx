import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import data from '../data';
import "slick-carousel/slick/slick-theme.css";
import '../component/CardCss.css';
const Card = () => {
  const [selected, setSelected] = useState(data[0])
  // const setBottle =(item)=>{
  //  setSelected({...data,img:item.img,backGroundColor:item.backGroundColor,prodName:item.prodName,price:item.price})
  //  console.log(product)
  // }
  const setBottle = (item) => {
    setSelected(selected[item])
  }
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
  // const setBottle =(item)=>{
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
            <div className='card' key={product.id} >
              <div className='proMedia'>
                <img src={require(`../assets/images/${selected.subImg[0].img}`)} alt='bottle1' />
              </div>
              <div className='shopCard-content'>
                <div className='productTitle '>
                  <div className=' d-flex center'>
                    <h3 >{selected.subImg[0].prodName}</h3>
                    <span >{selected.subImg[0].prodCol}</span>
                  </div>
                </div>
                <div className='prodSwiper'>
                  {product.subImg.map((item) => (
                    <div className='productList' key={item.id}>
                      <button onClick={setBottle(data[item])} >
                        <img src={require(`../assets/images/${item.img}`)} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className='prodPrice'>
                  <span>From ${selected.subImg[0].price}</span>
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
