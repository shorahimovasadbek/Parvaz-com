import React ,{useEffect}from 'react';
import './main.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'


const Index = (props) => {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div className='mainCard'>
            <div className='row '>
                {
                    props.mass.map((item, index) => {
                        return (
                            <div key={index}  className="col-12 col-sm-12 col-md-6 col-xl-4 col-xxl-4" data-aos-duration='1000' data-aos={`${index % 2 === 0 ? 'fade-up': 'fade-down'}`} >
                                <div className='MYcard my-4'  >
                                    <img src={item.image} alt="sigir" />
                                    <button><Link onClick={() => {window.location.href = item.page}}>See more</Link></button>
                                    <div className='botsec'>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Index;
