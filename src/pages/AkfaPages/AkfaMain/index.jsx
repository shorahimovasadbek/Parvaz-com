import React from 'react';
import Header from '../../../components/ui/ProductHeader'
import Line from '../../../components/ui/LIne'
import H1 from '../../../components/ui/H1/Header1'
import img from '../../../assets/headerbg.png'
import bg from '../../../assets/bg.png'
import bg1 from '../../../assets/c1.png'
import bg2 from '../../../assets/c2.png'
import bg3 from '../../../assets/c3.png'
import img0 from '../../../assets/akfa.png'
import img1 from '../../../assets/akfa.png'
import img2 from '../../../assets/akfa1.png'
import img3 from '../../../assets/akfa3.png'
import img4 from '../../../assets/akfa4.png'
import one1 from '../../../assets/HOmeImage/1.png'
import Nav from '../../../components/ui/Navbar/Navbar'
import Footer from '../../../components/ui/footer/Footer'
import Card from '../../../components/ui/AkfaAllProduc'

const Index = () => {
    const styles = {
        backgroundImage: `url(${one1})`,
        backgroundRepeat: 'no-repeat',
        };
    const mass =[
        {
            bg: bg,
            img: img0,
            name: 'Vinka 7000',
            about: 'Plastic window best meet the climatic requirements of world and are suitable for glazing residential buildings, office premises and industrial buildings.'
        },
        {
            bg: bg1,
            img: img1,
            name: 'Vinka 6200',
            about: 'Vinka 6200 profiles combine premium materials, special construction and modern design. The new line of windows creates comfort, making the house light, cozy and quiet'
        },
        {
            bg: bg2,
            img: img2,
            name: 'Vinka 6000',
            about: 'Vinka 6000 Trio are suitable for both small construction solutions in private houses and for large-scale projects in business complexes and offices.'
        },
        {
            bg: bg3,
            img: img4,
            name: 'ACCESSORIES',
            about: 'Convenience, functionality, beauty in your interior'
        },
    ]
    return (             
        <div style={styles}>
            <Header img={img} text='Parvazprof Industrial and Production Company' subtitl='Products' />
            <div className="container">
                <H1 info='Products' />
                <Line />
                <Card mass={mass}/>
            </div>
        </div>
    );
}

export default Index;
