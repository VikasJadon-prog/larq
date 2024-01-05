import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../component/Header.css';
import '../component/Child.css'
import { HiOutlineUser } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import Child from './Child';
import Cart from './Cart';
import {Link} from 'react-router-dom';
const Header = () => {
  // const [toggle ,setToggle] =useState(true);

  return (
    <>
   <section>
      <div className='container-header'>
        <div className='row'>
          <div className='left-header'>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Nav className="me-auto">
                <ul>
                  <li><Nav.Link to="#shopAll">SHOP ALL</Nav.Link>
                  </li>
                  <li><Nav.Link to="#purificaton">PURIFICATION</Nav.Link></li>
                  <li><Nav.Link to="#home">HOME</Nav.Link></li>
                  <li><Nav.Link to="#drinkware">DRINKWARE</Nav.Link></li>
                </ul>
              </Nav>
            </Navbar>
          </div>
          <div className='header-cen'>
            <h1>LARQ</h1>
          </div>
          <div className='header-right'>
            <nav className='righ-head-nav'>
              <ul><li>
                <a href=""> <h4>Technology</h4></a>
              </li>
                <li>
                  <a href=""><h4>FAQ</h4></a>
                </li>
                <li>
                  <a href=""><HiOutlineUser /></a>
                </li>
                <li>
                  <Link to="/Cart"><IoCartOutline /></Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Header;
