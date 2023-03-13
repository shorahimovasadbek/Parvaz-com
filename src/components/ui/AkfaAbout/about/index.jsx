import React,{useEffect} from 'react';
import img from '../../../../assets/group.png'
import img1 from '../../../../assets/group.png'
import AOS from 'aos';
import './mainIndex.css'
import 'aos/dist/aos.css';
import ModalImage from "react-modal-image";
const Index = () => {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div className='row mt-5'>
            <ModalImage
                small={img}
                large={img1}
                alt='saom'
                hideDownload={true}
                hideZoom={true}
                className="col-4 col-sm-3 col-md-2 p-3 p-sm-0 p-md-0 h-100"
                />
            {/* <img className='col-4 col-sm-3 col-md-2 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-down" data-aos-duration='2000' />
            <img className='col-4 col-sm-3 col-md-2 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/>
            <img className='col-4 col-sm-3 col-md-2 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/>
            <img className='col-4 col-sm-3 col-md-2 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-down" data-aos-duration='2000'/>
            <img className='col-4 col-sm-3 col-md-2 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/>
            <img className='col-4 col-sm-3 col-md-2 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/>
            <img className='col-4 col-sm-3 col-md-2 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/>
            <img className='col-4 col-sm-3 col-md-2 p-3 p-sm-0 p-md-0 h-100' src={img} alt="imaeg" data-aos="fade-up" data-aos-duration='2000'/> */}
        </div>
    );
}

export default Index;
