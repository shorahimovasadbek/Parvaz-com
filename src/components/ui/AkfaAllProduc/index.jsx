import React ,{useEffect}from 'react';
import './main.css'
import img from '../../../assets/bg.png'
import img1 from '../../../assets/akfa.png'
import Buttonn from '../Buttons/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
    useEffect(() => {
        AOS.init()
    }, []);
    const styles = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        };
    return (
        <div>
            <div className=' d-flex mycard row g-0'  data-aos="fade-right" data-aos-duration='1000'>
                <div className=" imgSec col-12 col-sm-6 col-md-3 mt-5 mt-md-0" style={styles} data-aos='fade-up' data-aos-duration='2000' data-aos-delay='500'>
                    <div className='imgbg '>
                       <img src={img1} alt="Pvc 7000 " /> 
                       <div className="line" data-aos="fade-right" data-aos-duration='2000'></div>
                       <div className="line1" data-aos="fade-up" data-aos-duration='2000'></div>
                       <div className="line2" data-aos="fade-down" data-aos-duration='2000'></div>
                       <div className="line3" data-aos="fade-right" data-aos-duration='2000'></div> 
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-9 w-50 mt-5 mt-md-0" data-aos='fade-left' data-aos-duration='2000' data-aos-delay='1000'>
                    <h3>Vinka 7000</h3>
                    <p className='mb-5'>
                        Plastic window best meet the climatic requirements of world and are suitable for glazing residential buildings, office premises and industrial buildings.
                    </p>
                    <Buttonn/>
                </div>
                <div className='hline twoLine' ></div>
                <div className='hline1 twoLine2' ></div>
            </div>
        </div>
    );
}

export default Index;
