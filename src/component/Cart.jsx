// import React from 'react'
// import '../component/Cart.css';
// import { IoClose } from "react-icons/io5";
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import { MdDelete } from "react-icons/md";
// // import bottle1 from 'public/assets/images/bottle1.png'
// const Cart = () => {
//     function valuetext(value) {
//         return `${value}°C`;
//     }
//     return (
//         <div className='cart-cont'>
//             <div className='cart-des'>
//                 <div className='cart-head'>
//                     <div className='cart-head-t'>
//                         Your cart
//                     </div>
//                     <div className='cart-cross'>
//                         <Link to='/proDes'><IoClose fill=' #153a5b' size="25px" /></Link>
//                     </div>
//                 </div>
//                 <div className='cart-off'>
//                     <div className='cart-off-con'>
//                         <div className='cart-off-con-spa'>
//                             <span>$10 store credit</span>
//                         </div>
//                         <Box >
//                             <Slider
//                                 aria-label="Small steps"
//                                 defaultValue={0.00000005}
//                                 getAriaValueText={valuetext}
//                                 step={0.00000001}
//                                 marks
//                                 min={-0.00000005}
//                                 max={0.0000001}
//                                 valueLabelDisplay="auto"
//                             />
//                         </Box>
//                         <div className='cart-off-con-spa'>
//                             <span >Congrats! You're receiving $10 in store credit on this order!</span>
//                         </div>
//                         <div className='cart-obj'>
//                             <div className='cart-obj-img'>
//                                 <img src={bottle1} alt="" />
//                             </div>
//                             <div className='cart-obj-des'>
//                                 <div className='tit'>
//                                     <div className='tit-con'>
//                                         <h5> LARQ Bottle Swig Top</h5>
//                                         <div className='tit-spa'>
//                                             <span>Granite White</span>
//                                             <span>34 oz</span>
//                                         </div>
//                                     </div>
//                                     <div className='cart-btn'>
//                                         <MdDelete fill='black' size="30px" />
//                                     </div>
//                                 </div>
//                                 <div className='bott-row'>
//                                     <div className='inc-dec'>
//                                         <button>-</button>
//                                         <span>1</span>
//                                         <button>+</button>
//                                     </div>
//                                     <div className='subTotal'>
//                                         <h5>$178</h5>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className='total'>
//                             <div className='tot-tot'>Total</div>
//                             <div className='tot-pri'>$427.75</div>

//                         </div>
//                         <div className='coup'>
//                             <div className='coup-icon'>
//                                 <span> Apply coupon code</span>
//                             </div>
//                         </div>
//                         <div className='chec-btn'>
//                             <button> Check out now </button>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Cart
