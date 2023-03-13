import React ,{useEffect}from 'react';
import './main1.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'


const Index = (props) => {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div className='mainCard'>
            <div className='mainCard '>
                {
                    props.mass.map((item, index) => {
                        return (
                            <div key={index}  className="cardd" data-aos-duration='1000' data-aos={`${index % 2 === 0 ? 'fade-up': 'fade-down'}`} >
                                <Link onClick={() => {window.location.href = item.page}}>
                                    <div className='MYcard '  >
                                        <img src={item.image} alt="sigir" />
                                        <button>See more</button>
                                        <div className='botsec'>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Index;
