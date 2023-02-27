import React from 'react'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './header.css'
import pvc1 from '../../../assets/header/pvc1.png'
import pvc2 from '../../../assets/header/pvc2.png'
import pvc3 from '../../../assets/header/pvc3.png'
import qoy from '../../../assets/header/qoy.png'
import bik from '../../../assets/header/bik.png'
import floor from '../../../assets/header/floor.png'
import tovuq from '../../../assets/header/tovuq.png'

export default function Header() {
  const images = [
    {
      img : pvc1
    },
    {
      img : pvc2
    },
    {
      img : pvc3
    },
    {
      img : qoy
    },
    {
      img : floor
    },
    {
      img : bik
    },
    {
      img : tovuq
    }
  ].map((item) => ({
    src: item.img
  })); 
  return (
    <div>
      <Carousel images={images} style={{ height: '100vh', width: '100vw' }} />
    </div>
  )
}
