import React from 'react';
import Herder from '../../../components/ui/ProductHeader'
import Card from '../../../components/ui/AnimalDetalis'
import CardAbout from '../../../components/ui/AnimalAbout'
import Line from '../../../components/ui/LIne'
import Header1 from '../../../components/ui/H1/Header1';
import img from '../../../assets/Mollar.png'
import img1 from '../../../assets/HOmeImage/1.png'


const Index = () => {
    const styles = {
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    
        };
    return (
        <div style={styles}>
            <Herder img={img} text='Meet Feeds' subtitl='Products'/>
            <div className="container">
                <Header1 info='Meet Feeds'/>
                <Card/>
                <Header1 info='About Feeds'/>
                <CardAbout/>
            </div>
        </div>
    );
}

export default Index;
