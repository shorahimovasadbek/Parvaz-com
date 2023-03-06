import React ,{useEffect}from 'react';
import './main.css'
import img from '../../../assets/rom.png'
import Btn from '../Buttons/Button'
import Line from '../LIne'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = (props) => {
    console.log(props);
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div className='container'>
            <div className=" row g-0">
                {
                    props.mass.map((item , i)=>{
                        return(
                            <div key={i} className={`${i%2 ===0 ? 'row my-5 myrow box1':'row my-5 myrow'}`}>
                                <div className={`${i%2 === 1 ? 'cols col-12 col-sm-6 col-md-6' :'colss col-12 col-sm-6 col-md-6'}`} data-aos="fade-up" data-aos-duration='2000'>
                                    <img src={item.img} alt="pvc" />
                                </div>
                                <div className="cols1 col-12 col-sm-6   col-md-6" data-aos="fade-down" data-aos-duration='2000'>
                                    <h4>{item.title}</h4>
                                    <p>{item.des}</p>
                                    <Btn/>
                                </div>
                                <Line/>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}

export default Index;
