import React from 'react';
import '../AkfaAbout/main.css'
import name from '../../../assets/akfa.png';
import Sliderr from '../AkfaAbout/slider'
import About from './about'

const Index = () => {
    return (
        <div >
            <h1 className='text-center text-light'>Vinka 7000</h1>
            <div className='row firstSection'>
                <div className="col-5 imgSec w-25">
                    <img src={name} alt="akfa" />
                    <div className="line"></div>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div> 
                </div>
                <div className='col-7'>
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
            <h1 className='text-center text-light'>Colors</h1>
            <Sliderr/>
            <div className='bottomline'></div>
            <About/>
        </div>
    );
}

export default Index;
