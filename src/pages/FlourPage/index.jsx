import React from 'react';
import background_flour from '../../assets/flour/floor_header.png'
import Header from '../../components/ui/ProductHeader';
import Floor from '../../components/ui/Flour_section/Flour';
import img1 from '../../assets/HOmeImage/1.png'


const Index = () => {
    const styles = {
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        };
    return (
        <div style={styles}>
            <Header img={background_flour} text='Cengiz Flour ' subtitl='Products' />
            <Floor/>
        </div>
    );
}

export default Index;
