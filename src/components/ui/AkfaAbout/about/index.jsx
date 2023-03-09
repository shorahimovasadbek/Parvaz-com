import React,{useEffect} from 'react';
import img from '../../../../assets/group.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div className='row mt-5'>

            <img className='col-12 col-sm-6 col-md-4 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-down" data-aos-duration='2000' />
            <img className='col-12 col-sm-6 col-md-4 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/>
            <img className='col-12 col-sm-6 col-md-4 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/>
            <img className='col-12 col-sm-6 col-md-4 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-down" data-aos-duration='2000'/>
            <img className='col-12 col-sm-6 col-md-4 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/>
            <img className='col-12 col-sm-6 col-md-4 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/>
        </div>
    );
}

export default Index;
