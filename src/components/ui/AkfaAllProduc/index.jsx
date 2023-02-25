import React from 'react';
import './main.css'
import img from '../../../assets/12.png'
import img1 from '../../../assets/akfa.png'
import Buttonn from '../Buttons/Button';

const Index = () => {
    const styles = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        };
    return (
        <div>
            <div className=' mycard'>
                <div className=" imgSec" style={styles}>
                    <div className='imgbg'>
                       <img src={img1} alt="Pvc 7000" /> 
                       <div className="line"></div>
                       <div className="line1"></div>
                       <div className="line2"></div>
                       <div className="line3"></div> 
                    </div>
                </div>
                <div className="textSec">
                    <h3>Vinka 7000</h3>
                    <p>
                        Plastic window best meet the climatic requirements of world and are suitable for glazing residential buildings, office premises and industrial buildings.
                    </p>
                    <Buttonn/>
                </div>
                <div className='hline twoLine'></div>
                <div className='hline1 twoLine2'></div>
            </div>
        </div>
    );
}

export default Index;
