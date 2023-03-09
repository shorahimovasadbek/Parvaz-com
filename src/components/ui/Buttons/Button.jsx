import React from 'react';
import './Button.css'

import {Link} from 'react-router-dom'

const Button = (props) => {
    return (
        <div>
            <div className='btn1' onClick={()=>{console.log(props)}}>
                <Link to={props.pass}>Learn More</Link>
            </div>
        </div>
    );
}

export default Button;


