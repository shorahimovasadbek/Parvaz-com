import React  , {useEffect}from 'react';
import '../AkfaAbout/main.css'
import name from '../../../assets/akfa.png';
import Sliderr from '../AkfaAbout/slider'
import About from './about'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div >
            <h1 className='text-center text-light mb-5'>Vinka 7000</h1>
            <div className='row firstSection'>
                <div className="col-12 col-sm-6 col-md-5 imgSec" data-aos='zoom-in-down' data-aos-duration='1500'>
                    <img src={name} alt="akfa" />
                    <div className="line" data-aos="fade-down" data-aos-duration='2000'></div>
                    <div className="line1" data-aos="fade-up" data-aos-duration='2000'></div>
                    <div className="line2" data-aos="fade-down" data-aos-duration='2000'></div>
                    <div className="line3" data-aos="fade-up" data-aos-duration='2000'></div>
                </div>
                <div className='col-12 col-sm-6 col-md-7 mt-5 mt-md-0' data-aos='zoom-in-up' data-aos-duration='1500'>
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
            <div className='bottomline'></div>
            <h1 className='text-center text-light m-4'>Colors</h1>
            <Sliderr/>
            <div className='bottomline'></div>
            <About />
        </div>
    );
}

export default Index;
