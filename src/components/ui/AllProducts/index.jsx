import React ,{useEffect}from 'react';
import './main.css'
import img from '../../../assets/rom.png'
import Btn from '../Buttons/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div className='container'>
            <div className="myrow row g-0">
                <div className="colss col-12 col-sm-6 col-md-6" data-aos="fade-left" data-aos-duration='2000'>
                    <img src={img} alt="pvc" />
                </div>
                <div className="cols1 col-12 col-sm-6   col-md-6" data-aos="fade-right" data-aos-duration='2000'>
                    <h4>Advantages of our Products</h4>
                    <p>If you are looking for high-quality PVC proﬁles, then you are on the right path. Before choosing  PVC proﬁle, you should consider quality because it plays a big role. It should be super drip wind, gaskets should be heat, noise, ﬁre, water and dust resistant</p>
                    <Btn/>
                </div>
            </div>
        </div>
    );
}

export default Index;
