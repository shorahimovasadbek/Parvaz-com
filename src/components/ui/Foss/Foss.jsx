import Aos from 'aos';
import React, { useEffect } from 'react';
import foss from '../../../assets/HOmeImage/qimmata.png'
import './foss.css'
import 'aos/dist/aos.css';

const Foss = () => {
  useEffect(() => {
    Aos.init()
}, []);
  return (
    <div className='container my-4' >
    <h1 className='text-center text-light mb-5'>Foss 7000</h1>
    <div className='row firstSection'>
        <div className="col-12 col-sm-6 col-md-6 imgSec" data-aos='zoom-in-down' data-aos-duration='1500'>
            <img src={foss} alt="akfa" />
            <div className="line" data-aos="fade-down" data-aos-duration='2000'></div>
            <div className="line1" data-aos="fade-up" data-aos-duration='2000'></div>
            <div className="line2" data-aos="fade-down" data-aos-duration='2000'></div>
            <div className="line3" data-aos="fade-up" data-aos-duration='2000'></div>
        </div>
        <div className='col-12 col-sm-6 col-md-6 mt-5 mt-md-0' data-aos='zoom-in-up' data-aos-duration='1500'>
            <ul>
                <li>Application on wall directly</li>
                <li>Witdh of 60 mm, pulp thickness</li>
                <li>Aesthetic and high resistance with four little
                    rooms on profiles</li>
                <li>One type base sheet iron</li>
                <li>Application of internal and external gasgets</li>
                <li>Easy cleaning with aesthetic, smooth surface</li>
                <li>Ensures energy saving up to 70 %</li>
                <li>Sound isolation up to 50 db</li>
            </ul>
        </div>
    </div>
</div>
  );
}

export default Foss;
