import React from 'react';
import Header from '../../components/ui/ProductHeader'
import back_img from '../../assets/About_us/About_us.png'
import About_us from '../../components/ui/About_us/About_us';
import Statistic from '../../components/ui/statis/Statistic';

const Index = () => {
    return (
        <div>
            <Header img={back_img} text=' About Us'  />
            <About_us/>
            <Statistic/>
        </div>
    );
}

export default Index;
