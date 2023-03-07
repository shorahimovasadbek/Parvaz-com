import React from 'react';
import background_flour from '../../assets/flour/floor_header.png'
import Header from '../../components/ui/ProductHeader';
import Floor from '../../components/ui/Flour_section/Flour';

const Index = () => {
    return (
        <div>
            <Header img={background_flour} text='Cengiz Flour ' subtitl='Products' />
            <Floor/>
        </div>
    );
}

export default Index;
