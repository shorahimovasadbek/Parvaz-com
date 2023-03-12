import React, { useEffect } from 'react';
import './Button.css'
import {useTranslation} from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'


const Button = (props) => {
    const {t} = useTranslation()

    function CallMe(){
        window.location.href = props.pass
    }

    return (
        <div>
            <div className='btn1'>
                <Link onClick={CallMe}>{t("H_carousel_button")}</Link>
            </div>
        </div>
    );
}

export default Button;


