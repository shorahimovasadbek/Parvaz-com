import React from 'react'
import './footer.css'
import footer_img from '../../../assets/footer_images/image 22.png'
import logo_img from '../../../assets/footer_images/logo.png'
export default function Footer() {
  return (
    <div className='footer'>
      <img className='patterns' src={footer_img} alt="footer images" />
      <div className='parent_div container'>
        <div>
          <img className='logo' src={logo_img} alt="logo png" />
          <p>Parvazprof Industrial and Production Company (the Company) is a company registered in Ministry of Commerce and Industries, activity of the Company is to manufacture and sell all kinds of PVC proﬁles for windows and doors items.</p>
        </div>
        <ul>
          <li>Quick Menu</li>
          <li>Home page</li>
          <li>About us</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Contact us</li>
          <li>parvozprof@gmail.com</li>
        </ul>
      </div>
    </div>
  )
}
