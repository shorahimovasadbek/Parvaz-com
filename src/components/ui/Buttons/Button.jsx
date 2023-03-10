import React, { useEffect } from 'react';
import './Button.css'

import { Link, useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'


const Button = (props) => {
    // const history = useHistory();
    // useEffect(() => {
    //     const unlisten = history.listen((location) => {
    //         if (location.pathname !== window.location.pathname) {
    //             window.history.replaceState({ refresh: true }, document.title);
    //         }
    //     });

    //     return () => {
    //         unlisten();
    //     };

    // }, [history]);

    function CallMe(){
        window.location.href = props.pass
    }

    return (
        <div>
            <div className='btn1'>
                <Link onClick={CallMe}>Learn More</Link>
            </div>
        </div>
    );
}

export default Button;


