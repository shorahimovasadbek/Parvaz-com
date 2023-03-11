import React, { useEffect } from 'react';
import './main.css'
import img from '../../../assets/rom.png'
import img1 from '../../../assets/HOmeImage/un.png'
import img2 from '../../../assets/HOmeImage/aralash.png'
import img4 from '../../../assets/HOmeImage/qimmata.png'
import Btn from '../Buttons/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useTranslation} from 'react-i18next'

const Index = () => {
    const {t} = useTranslation()
    const mass = [
        {
            image: img,
            title: t("Product_akwin_title"),
            pas: t("Product_akwin_desc"),
            pass: '/akwin'
        },
        {
            image: img1,
            title: t("Product_flour_title"),
            pas: t("Product_flour_desc"),
            pass: '/flour'
        },
        {
            image: img2,
            title: t("Product_animal_title"),
            pas: t("Product_animal_desc"),
            pass: '/animal'
        },
        {
            image: img4,
            title: t("Product_labaratory_title"),
            pas: t("Product_labaratory_desc")
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
                        <div key={i} className='my-2' >
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
                            <p data-aos='zoom-in-up' className='border-bottom border-2 border-white w-75 m-auto'></p>
                        </div>

                    )
                })
            }

        </div>
    );
}

export default Index;
