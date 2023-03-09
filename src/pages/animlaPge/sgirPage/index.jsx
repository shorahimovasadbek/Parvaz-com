import React from 'react';
import ProductHeader from '../../../components/ui/ProductHeader'
import img from '../../../assets/cowheader.png'
import H1 from '../../../components/ui/H1/Header1'
import Line from '../../../components/ui/LIne'
import img1 from  '../../../assets/sigir.png'
import img2 from '../../../assets/meatCow.png'
import Card from '../../../components/ui/AnimalCard'

import bg from '../../../assets/HOmeImage/1.png'
const Index = () => {
    const styles = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        };
    const mass =[
        {
            image: img1,
            text: 'Dairy cattle ',
            page: '/animalabout'
        },
        {
            image: img2,
            text: 'Meat products',
            page: '/animalabout'
        },
    ]
    return (
        <div>
            <ProductHeader img={img}  text='Cattle And Claf Feeds' subtitl='Products'/>
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
