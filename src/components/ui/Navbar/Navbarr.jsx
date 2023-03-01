import React from 'react'
import img_logo from '../../../assets/footer_images/logo.png'
import "./navbar.css";


export default function Navbarr() {



  return (
    <div className='header'>
     <div className='container'>
        <nav>
          <a href="#"><img src={img_logo} alt="parvaz.com"/></a>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li className='box'>product
              <ul className='product'>
                <li><a href="#">akfa</a></li>
                <li><a href="#">Yem</a></li>
                <li><a href="#">un</a></li>
              </ul>
            </li>
            <li><a href="#">coltact</a></li>
            <li>eng
              <ul className='lang'>
                <li>rus</li>
                <li>uz</li>
                <li>fors</li>
              </ul>
            </li>
          </ul>
        </nav>
     </div>
    </div>
  )
}
