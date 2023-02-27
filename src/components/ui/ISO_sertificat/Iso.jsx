import React , {useEffect} from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Iso_img1 from '../../../assets/Iso_images/image11.png'
import Iso_img2 from '../../../assets/Iso_images/image14.png'
import Iso_img3 from '../../../assets/Iso_images/image17.png'
import Iso_img4 from '../../../assets/Iso_images/image18.png'
import './iso.css'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Header1 from '../H1/Header1';

export default function Iso() {
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

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div className='container text-center'>
      <Header1 info='ISO Certificates'/>
      <Carousel className='sliderssss' infinite={true} keyBoardControl={true} responsive={responsive} autoPlay={true} autoPlaySpeed={2000} showDots={true}>
        <div data-aos="fade-up"><img src={Iso_img1} alt="iso_sertificat1"/></div>
        <div data-aos-delay='500' data-aos="fade-up" data-aos-easing="ease-in-sine"><img src={Iso_img2} alt="iso_sertificat2"/></div>
        <div data-aos="fade-down"><img src={Iso_img3} alt="iso_sertificat3"/></div>
        <div data-aos-delay='500' data-aos="fade-down" data-aos-easing="ease-in-sine"><img src={Iso_img4} alt="iso_sertificat4"/></div>
        <div data-aos="fade-up"><img src={Iso_img2} alt="iso_sertificat2"/></div>
        <div data-aos-delay='500' data-aos="fade-up" data-aos-easing="ease-in-sine"><img src={Iso_img3} alt="iso_sertificat3"/></div>
      </Carousel>
    </div>
  )
}
