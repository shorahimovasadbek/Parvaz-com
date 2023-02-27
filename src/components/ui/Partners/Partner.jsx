import React from "react";
import partner1_img from '../../../assets/Partners/image 35.png'
import partner2_img from '../../../assets/Partners/image 36.png'
import partner3_img from '../../../assets/Partners/image 37.png'
import partner4_img from '../../../assets/Partners/image 38.png'
import partner5_img from '../../../assets/Partners/image 39.png'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import './partners.css'

export default function Partner() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <div className="container">
      <Carousel className='sliderssss' infinite={true} keyBoardControl={true} responsive={responsive} autoPlay={true} autoPlaySpeed={2000} showDots={true}>
        <div><img src={partner1_img} alt="iso_sertificat1"/></div>
        <div><img src={partner2_img} alt="iso_sertificat2"/></div>
        <div><img src={partner3_img} alt="iso_sertificat3"/></div>
        <div><img src={partner4_img} alt="iso_sertificat4"/></div>
        <div><img src={partner5_img} alt="iso_sertificat2"/></div>
      </Carousel>
    </div>
  );
}
