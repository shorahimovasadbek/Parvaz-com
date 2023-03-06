import React from 'react'
import Header_wiev from '../Header_wiev__section/Header_wiev'
import back_img from '../../../assets/About_us/About_us.png'
import './about_us.css'

export default function About_us() {
  return (
    <div className='big_content'>
      <Header_wiev state={{ src: back_img, name: 'About us' }} />
      <div className="container">
        <p className='products'>Accessories</p>
        <p className='border-bottom border-3 w-25'></p>
      </div>
    </div>
  )
}
