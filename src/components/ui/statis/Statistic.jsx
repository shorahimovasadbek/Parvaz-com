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

export default function Statistic() {
  const [counter, setCounter] = useState(false)

  useEffect(() => {
    Aos.init()
  }, [counter]);

  return (
    <div className='container'>
      <Header1 info='Statistics'/>
      <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
        <div className="row d-flex justify-content-center">
          <div data-aos-duration='1500' data-aos-delay='1000' data-aos="fade-right" className="col-12 my-4 my-lg-0 px-4 px-lg-3 col-md-6  col-lg-3">
            <div className="card text-center">
              <div>
                <img src={factories} alt="statistic img1" />
              </div>
              <h2>{counter && <CountUp start={0} end={200} duration={4} delay={0} />} </h2>
              <p>Factories</p>
            </div>
          </div>
          <div data-aos-duration='1500' data-aos-delay='1000' data-aos="fade-up" className="col-12 my-4 my-lg-0 px-4 px-lg-3 col-md-6  col-lg-3">
            <div className="card text-center">
              <div>
                <img src={clients} alt="statistic img1" />
              </div>
              <h2>{counter && <CountUp start={0} end={1000} duration={4} delay={0} />} </h2>
              <p>Clients</p>
            </div>
          </div>
          <div data-aos-duration='1500' data-aos-delay='1000' data-aos="fade-left" className="col-12 my-4 my-lg-0 px-4 px-lg-3 col-md-6  col-lg-3">
            <div className="card text-center">
              <div>
                <img src={worders} alt="statistic img1" />
              </div>
              <h2>{counter && <CountUp start={0} end={300} duration={4} delay={0} />} </h2>
              <p>Workers</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  )
}
