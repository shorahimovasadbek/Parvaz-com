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
import { useTranslation } from 'react-i18next'

export default function Location() {
  const {t} = useTranslation()
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
      <Header1 info={t("Location")} />
      <div className='row images_section mb-5'>
        <div className='col-12 my-3 my-lg-0 col-md-6 col-lg-3' data-aos-duration='1000' data-aos="fade-up">
          <img src={LocationImg1} alt="Location img" />
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>{t("Afganistan")}</p>
            <span onClick={() => {window.location.href = '/contact'}}>{t("Afganistan")}</span>
          </span>
        </div>
        <div className='col-12 my-3 my-lg-0 col-md-6 col-lg-3' data-aos-duration='1000' data-aos="fade-up">
          <img src={LocationImg2} alt="Location img" />
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>{t("Uzbekistan")}</p>
            <span onClick={() => {window.location.href = '/contact'}}>{t("Uzbekistan")}</span>
          </span>
        </div>
        <div className='col-12 my-3 my-lg-0 col-md-6 col-lg-3' data-aos-duration='1000' data-aos="fade-up">
          <img src={LocationImg4} alt="Location img" />
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>{t("Kazakhistan")}</p>
            <span onClick={() => {window.location.href = '/contact'}}>{t("Kazakhistan")}</span>
          </span>
        </div>
        <div className='col-12 my-3 my-lg-0 col-md-6 col-lg-3' data-aos-duration='1000' data-aos="fade-up">
          <img src={LocationImg3} alt="Location img" />
          <span className='img_back__div'>
            <img src={LocationImg} alt="Location img" />
            <p>{t("Amerika")}</p>
            <span onClick={() => {window.location.href = '/contact'}}>{t("Amerika")}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
