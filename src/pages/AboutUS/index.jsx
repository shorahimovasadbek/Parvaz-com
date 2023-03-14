import React from 'react';
import Header from '../../components/ui/ProductHeader'
import back_img from '../../assets/About_us/About_us.png'
import About_us from '../../components/ui/About_us/About_us';
import Statistic from '../../components/ui/statis/Statistic';
import img1 from '../../assets/HOmeImage/1.png'
import Sertificat from '../../components/ui/sertificat/Sertificat';
const Index = () => {
    const styles = {
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflowX:"hidden"
        };
    return (
        <div style={styles}>
            <Header img={back_img} text=' About Us'  />
            <About_us/>
            <Statistic/>
            <Sertificat/>
        </div>
    );
}

export default Index;
