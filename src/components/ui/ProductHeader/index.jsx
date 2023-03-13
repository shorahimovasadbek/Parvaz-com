import React from 'react';
import './main.css'
import Paragraf from '../Paragraf'
import H1 from '../H1/Header1'

const Index = (props) => {
    const styles = {
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        };
    return (
        <div style={styles} className='headerbg'>
            <div className="container">
                <H1 info={props.text}/>
                <Paragraf info={props.subtitl}/>
            </div>
        </div>
    );
}

export default Index;
