import React ,{useEffect}from 'react';
import './main.css'
import img from '../../../assets/bg.png'
import img1 from '../../../assets/akfa.png'
import Buttonn from '../Buttons/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = (props) => {
    console.log(props);
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
            {
                props.mass.map((item,index)=>{
                    return(
                        <div key={index} className=' d-flex mycard row g-0 p-2 mt-5'  data-aos="fade-down"   data-aos-duration='1000'>
                            <div className={`${index%2===0 ?'imgSec2 col-12 col-sm-6 col-md-3 my-5 my-xl-0 ':'imgSec1 col-12 col-sm-6 col-md-3 my-5 my-xl-0 '}`} style={styles} data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
                                <div className='imgbg '>
                                <img src={item.img} alt={item.name} /> 
                                <div className="line" data-aos="fade-down" data-aos-duration='2000'></div>
                                <div className="line1" data-aos="fade-up" data-aos-duration='2000'></div>
                                <div className="line2" data-aos="fade-down" data-aos-duration='2000'></div>
                                <div className="line3" data-aos="fade-up" data-aos-duration='2000'></div> 
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-9 w-50  my-5 my-xl-0 textSize" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
                                <h3>{item.name}</h3>
                                <p className='mb-5'>
                                    {
                                        item.about
                                    }
                                </p>
                                <Buttonn pass = {item.pass} />
                            </div>
                            <div className={`${index%2===0? 'hline':'twoLine' }`} ></div>
                            <div className={`${index%2===0? 'hline1':'twoLine2' }`}  ></div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Index;