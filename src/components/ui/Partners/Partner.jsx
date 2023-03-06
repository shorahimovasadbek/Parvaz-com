import React, {useEffect} from "react";
import partner1_img from '../../../assets/Partners/image 35.png'
import partner2_img from '../../../assets/Partners/image 36.png'
import partner3_img from '../../../assets/Partners/image 37.png'
import partner4_img from '../../../assets/Partners/image 38.png'
import partner5_img from '../../../assets/Partners/image 39.png'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import './partners.css'
import Header1 from "../H1/Header1";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Partner() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1  
    }
  }

  useEffect(() => {
    Aos.init()
  }, [])
  

  return (
    <div className="container">
      <Header1 info='Partners'/>
      <Carousel className='sliderssss' infinite={true} keyBoardControl={true} responsive={responsive} autoPlay={true} autoPlaySpeed={3000} showDots={true}>
        <div className="text-center" data-aos-duration='1000' data-aos="fade-up"><img src={partner1_img} alt="iso_sertificat1"/></div>
        <div className="text-center" data-aos-duration='1000' data-aos="fade-up"><img src={partner2_img} alt="iso_sertificat2"/></div>
        <div className="text-center" data-aos-duration='1000' data-aos="fade-up"><img src={partner3_img} alt="iso_sertificat3"/></div>
        <div className="text-center" data-aos-duration='1000' data-aos="fade-up"><img src={partner4_img} alt="iso_sertificat4"/></div>
        <div className="text-center" data-aos-duration='1000' data-aos="fade-up"><img src={partner5_img} alt="iso_sertificat2"/></div>
      </Carousel>
    </div>
  );
}
