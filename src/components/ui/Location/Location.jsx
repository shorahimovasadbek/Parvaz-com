import React, { useEffect } from 'react'
import './location.css'
import LocationImg1 from '../../../assets/Location images/five.png'
import LocationImg2 from '../../../assets/Location images/four.png'
import LocationImg3 from '../../../assets/Location images/one.png'
import LocationImg4 from '../../../assets/Location images/sex.png'
import LocationImg from '../../../assets/Location images/location.png'
import Header1 from '../H1/Header1'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Location() {
  const styles1 = {
    backgroundImage: `url(${LocationImg1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const styles2 = {
    backgroundImage: `url(${LocationImg2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const styles3 = {
    backgroundImage: `url(${LocationImg3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const styles4 = {
    backgroundImage: `url(${LocationImg4})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  useEffect(() => {
    Aos.init()
  }, [])


  return (
    <div className='container'>
      <Header1 info='Location' />
      <div className='row g-0 images_section'>
        <div data-aos-duration='1500' data-aos="fade-right" className='col-12 col-md-6 col-lg-3' style={styles1}>
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>Uzbekistan</p>
            <span>Location</span>
          </span>
        </div>
        <div data-aos-duration='1500' data-aos="fade-down" className='col-12 col-md-6 col-lg-3' style={styles2}>
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>Afganistan</p>
            <span>Location</span>
          </span>
        </div>
        <div data-aos-duration='1500' data-aos="fade-up" className='col-12 col-md-6 col-lg-3' style={styles3}>
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>Amerika</p>
            <span>Location</span>
          </span>
        </div>
        <div data-aos-duration='1500' data-aos="fade-left" className='col-12 col-md-6 col-lg-3' style={styles4}>
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>Kazakhistan</p>
            <span>Location</span>
          </span>
        </div>
      </div>
    </div>
  )
}
