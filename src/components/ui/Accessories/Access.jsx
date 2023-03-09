import React, { useState, useEffect } from 'react'
import access1 from '../../../assets/Access_img/access1.jpg'
import access2 from '../../../assets/Access_img/access2.jpg'
import access3 from '../../../assets/Access_img/access3.jpg'
import access4 from '../../../assets/Access_img/access4.jpg'
import access5 from '../../../assets/Access_img/access5.jpg'
import access6 from '../../../assets/Access_img/access6.jpg'
import access7 from '../../../assets/Access_img/access7.jpg'
import access8 from '../../../assets/Access_img/access8.jpg'
import access9 from '../../../assets/Access_img/access9.jpg'
import access10 from '../../../assets/Access_img/access10.jpg'
import access11 from '../../../assets/Access_img/access11.jpg'
import access12 from '../../../assets/Access_img/access12.jpg'
import access13 from '../../../assets/Access_img/access13.jpg'
import access14 from '../../../assets/Access_img/access14.jpg'
import access15 from '../../../assets/Access_img/access15.jpg'
import back from '../../../assets/Access_img/back.png'
import background_access from '../../../assets/Access_img/background_access.png'
import './access.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Header_wiev from '../Header_wiev__section/Header_wiev'

export default function Access() {

  useEffect(() => {
    Aos.init()
  }, [])
  

  const [mass, setMass] = useState([
    {
      src: access1,
      name: 'Plastic Window Handle',
      back_url: back
    },
    {
      src: access2,
      name: 'Plastic Door Handle',
      back_url: back
    },
    {
      src: access3,
      name: 'Plastic Yale Door Handle',
      back_url: back
    },
    {
      src: access4,
      name: 'Plastic Window Handle',
      back_url: back
    },
    {
      src: access5,
      name: 'Plastic Yale Door Handle',
      back_url: back
    },
    {
      src: access6,
      name: 'Zamak Hinges',
      back_url: back
    },
    {
      src: access7,
      name: 'Zamak Hinges',
      back_url: back
    },
    {
      src: access8,
      name: 'Zamak Window',
      back_url: back
    },
    {
      src: access9,
      name: 'Zamak Window',
      back_url: back
    },
    {
      src: access10,
      name: 'Zamak Window',
      back_url: back
    },
    {
      src: access11,
      name: 'Zamak Window',
      back_url: back
    },
    {
      src: access12,
      name: 'Zamak Window',
      back_url: back
    },
    {
      src: access13,
      name: 'Zamak Window',
      back_url: back
    },
    {
      src: access14,
      name: 'Zamak Window',
      back_url: back
    },
    {
      src: access15,
      name: 'Zamak Meeting',
      back_url: back
    },
  ])


  return (
    <div className='big_content'>
      <Header_wiev state={{src:background_access, name:'ACCESSORIES', title:'Incredible at incredible value.'}}/>
      <div className="container">
        <p className='products d-none d-lg-block'>Accessories</p>
        <p className='border-bottom border-3 d-none d-lg-block'></p>
        <div className='row align-items-center'>
          {
            (mass) && mass.map((item, index) => {
              return (
                <div key={index} className="col-12 col-md-6 col-lg-4 my-5 text-center">
                  <div className="col_back__img">
                    <img data-aos='fade-down' data-aos-duration='800' src={item.back_url} alt={item.name} />
                    <img data-aos='fade-up' data-aos-duration='800' className='img' src={item.src} alt={item.name} />
                    <div className='information_div'><p  data-aos='fade-down'  data-aos-duration='800' className='text_button'><span className='span'>{item.name}</span></p></div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}