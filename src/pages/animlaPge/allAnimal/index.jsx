import React from 'react';
import Headd from '../../../components/ui/ProductHeader'
import H1 from '../../../components/ui/H1/Header1'
import img from '../../../assets/bugdoy.png'
import Line from '../../../components/ui/LIne'
import Card from '../../../components/ui/AnimalCard'
import img1 from '../../../assets/chik1.png'
import img2 from '../../../assets/chik2.png'
import img3 from '../../../assets/sigir.png';



const Index = () => {
    const mass = [
        {
            image: img3,
            text: 'Cattle And Claf Feeds'
        },
        {
            image: img1,
            text: 'Poultry Feeds'
        },
        {
            image: img2,
            text: 'Poultry Feeds'
        }
    ]
    return (
        <div >
            <Headd img={img} text='Animals Feed ' subtitl='Products' />
            <div className="container">
                <H1 info='Products' />
                <Line />
                <div className="py-3">
                    <Card mass={mass}  />
                </div>

            </div>
        </div>
    );
}

export default Index;
