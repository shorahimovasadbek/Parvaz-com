import React, { useState, useEffect } from 'react'
import factories from '../../../assets/statis_images/factories.png'
import clients from '../../../assets/statis_images/clients.png'
import worders from '../../../assets/statis_images/workers.png'
import './statistics.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header1 from '../H1/Header1'
import {useTranslation} from 'react-i18next'

export default function Statistic() {
  const [counter, setCounter] = useState(false)
  const {t} = useTranslation()
  useEffect(() => {
    Aos.init()
  }, [counter]);

  return (
    <div  className='container'>
      <Header1 info={t("Statistic")}/>
      <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
        <div className="row mb-5 g-0 d-flex justify-content-center">
          <div data-aos-duration='1500' data-aos="fade-up" className="col-12 my-4 my-lg-0 px-4 px-lg-3 col-md-6  col-lg-3">
            <div className="card text-center">
              <div>
                <img src={factories} alt="statistic img1" />
              </div>
              <h2>{counter && <CountUp start={0} end={200} duration={4} delay={0} />} </h2>
              <p>{t("Factories")}</p>
            </div>
          </div>
          <div data-aos-duration='1500' data-aos="fade-up" className="col-12 my-4 my-lg-0 px-4 px-lg-3 col-md-6  col-lg-3">
            <div className="card text-center">
              <div>
                <img src={clients} alt="statistic img1" />
              </div>
              <h2>{counter && <CountUp start={0} end={1000} duration={4} delay={0} />} </h2>
              <p>{t("Clients")}</p>
            </div>
          </div>
          <div data-aos-duration='1500' data-aos="fade-up" className="col-12 my-4 my-lg-0 px-4 px-lg-3 col-md-6  col-lg-3">
            <div className="card text-center">
              <div>
                <img src={worders} alt="statistic img1" />
              </div>
              <h2>{counter && <CountUp start={0} end={300} duration={4} delay={0} />} </h2>
              <p>{t("Workers")}</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  )
}
