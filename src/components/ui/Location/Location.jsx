import React, { useEffect } from 'react'
import './location.css'
import LocationImg1 from '../../../assets/Location images/five.png'
import LocationImg2 from '../../../assets/Location images/four.png'
import LocationImg3 from '../../../assets/Location images/one.png'
import LocationImg4 from '../../../assets/Location images/sex.png'
import LocationImg from '../../../assets/Location images/location.png'
import Header1 from '../H1/Header1'
import { Link } from 'react-router-dom'
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
      <div className='row images_section'>
        <div className='col-12 my-3 my-lg-0 col-md-6 col-lg-3' data-aos-duration='1000' data-aos="fade-up">
          <img src={LocationImg1} alt="Location img" />
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>Uzbekistan</p>
            <span><Link to='/contact'>Location</Link></span>
          </span>
        </div>
        <div className='col-12 my-3 my-lg-0 col-md-6 col-lg-3' data-aos-duration='1000' data-aos="fade-up">
          <img src={LocationImg2} alt="Location img" />
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>Afganistan</p>
            <span><Link to='/contact'>Location</Link></span>
          </span>
        </div>
        <div className='col-12 my-3 my-lg-0 col-md-6 col-lg-3' data-aos-duration='1000' data-aos="fade-up">
          <img src={LocationImg3} alt="Location img" />
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>Amerika</p>
            <span><Link to='/contact'>Location</Link></span>
          </span>
        </div>
        <div className='col-12 my-3 my-lg-0 col-md-6 col-lg-3' data-aos-duration='1000' data-aos="fade-up">
          <img src={LocationImg4} alt="Location img" />
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>Kazakhistan</p>
            <span><Link to='/contact'>Location</Link></span>
          </span>
        </div>
      </div>
    </div>
  )
}
