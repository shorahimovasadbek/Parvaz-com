import React, { useEffect } from 'react';
import './main.css'
import img from '../../../assets/rom.png'
import img1 from '../../../assets/HOmeImage/un.png'
import img2 from '../../../assets/HOmeImage/aralash.png'
import img4 from '../../../assets/HOmeImage/qimmata.png'
import Btn from '../Buttons/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Index = () => {
    const mass = [
        {
            image: img,
            title: 'Advantages of our Products',
            pas: 'If you are looking for high-quality PVC proﬁles, then you are on the right path. Before choosing  PVC proﬁle, you should consider quality because it plays a big role. It should be super drip wind, gaskets should be heat, noise, ﬁre, water and dust resistant',
            pass: '/akwin'
        },
        {
            image: img1,
            title: 'Our flours',
            pas: 'The products are producing with the best and most excellent quality under supervision of Turkish experts by Turkish and German machineries. All feed are producing by using the best quality raw materials, and special vitamins and minerals with Turkish standards that has the most excellent quality',
            pass: '/flour'
        },
        {
            image: img2,
            title: 'Parvazprof Industrial & Production Company',
            pas: 'Parvazprof Industrial and Production Company is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan ',
            pass: '/animal'
        },
        {
            image: img4,
            title: 'Our laboratory',
            pas: 'We have a Foss laboratory machine. It is quite expensive and very sensitive machine. This machine is used to determine the composition of the feed. He also tests wheat. It is a very expensive car. The price is 100,000 euros.'
        },

    ]
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div className='container'>
            {
                mass.map((item, i) => {
                    return (
                        <div key={i} className='my-5' >
                            <div className="myrow row g-0">
                                <div className={`${i % 2 === 0 ? 'cols col-12 col-sm-6 col-md-6   ' : 'box1 colss col-12 col-sm-6 col-md-6 text-end  '}`} data-aos="zoom-in-up" data-aos-duration='1000'>
                                    <img src={item.image} alt="pvc" />
                                </div>
                                <div className="cols1 col-12 col-sm-6 col-md-6 text-start text-md-start" data-aos="zoom-in-down" data-aos-duration='1000'>
                                    <h4>{item.title}</h4>
                                    <p>{item.pas}</p>
                                    <Btn pass={item.pass} />
                                </div>
                            </div>
                            <p data-aos='zoom-in-up' className='border-bottom border-2 border-white w-75 mt-5 m-auto'></p>
                        </div>

                    )
                })
            }

        </div>
    );
}

export default Index;
