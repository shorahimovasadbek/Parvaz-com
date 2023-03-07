import React from 'react';
import Access from '../../../components/ui/Accessories/Access';
import Header from '../../../components/ui/ProductHeader/index';
import Nav from '../../../components/ui/Navbar/Navbar'
import Footer from '../../../components/ui/footer/Footer'
import background_access from '../../../assets/Access_img/background_access.png'
import img1 from '../../../assets/HOmeImage/1.png'

const Index = () => {
    const styles = {
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        };
    return (
        <div style={styles}>
            <Nav/>
            <Header img={background_access} text='Vinka 7000' subtitl='Products' />
            <Access/>
            <Footer/>
        </div>
    );
}

export default Index;
