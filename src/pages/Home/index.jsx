import React from 'react';
import Head from '../../components/ui/Header/Header'
import Header1 from '../../components/ui/H1/Header1';
import Cards from '../../components/ui/AllProducts'
import Static from '../../components/ui/statis/Statistic'
import Ico from '../../components/ui/ISO_sertificat/Iso'
import Location from '../../components/ui/Location/Location'
import Partners from '../../components/ui/Partners/Partner'
import img from '../../assets/HOmeImage/1.png'
import { useTranslation } from 'react-i18next'
import './main.css'

const Index = () => {
    const { t } = useTranslation()
    const styles = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div class="overflow-hidden">
            <Head />
            <div style={styles}>
                {/* <div className="container-fluid gx-0"> */}
                    <Header1 info={t("Product")} />
                    <Cards />
                    {/* <div className='back_white'> */}
                        <Static />
                        <Ico />
                    {/* </div> */}
                    <Location />
                    <Partners />
                {/* </div> */}
            </div>
        </div>
    );
}

export default Index;