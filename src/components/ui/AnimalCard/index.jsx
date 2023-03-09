import React ,{useEffect}from 'react';
import './main.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'


const Index = (props) => {
    useEffect(() => {
        AOS.init()
    }, []);
    console.log(props);
    return (
        <div >
            <div className='maincard row'>
                {
                    props.mass.map((item, index) => {
                        return (
                            <div key={index}  className="col-12 col-sm-12 col-md-6 col-xl-4 col-xxl-4" data-aos-duration='1000' data-aos={`${index %2 === 0 ? 'fade-up': 'fade-down'}`} >
                                <div className='MYcard my-5 '  >
                                    <img src={item.image} alt="sigir" />
                                    <button onClick={()=>{}}><Link to={item.page}>See more</Link></button>
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
