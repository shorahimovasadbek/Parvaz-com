import React from 'react';
import Nav from '../../../components/ui/Navbar/Navbar'
import Footer from '../../../components/ui/footer/Footer'
import Header from '../../../components/ui/ProductHeader/index';
import About from '../../../components/ui/AkfaAbout/index'
import img from '../../../assets/headerbg.png'
import img1 from '../../../assets/HOmeImage/1.png'

const Index = () => {
    const styles = {
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        };
    return (
        <div style={styles}>
            <Header img={img} text='Vinka 7000' subtitl='Products' />
            <div className='container py-5'>
                <About/>
            </div>
        </div>
    );
}

export default Index;
