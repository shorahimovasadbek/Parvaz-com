import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header1(props) {
  useEffect(() => {
    AOS.init()
}, []);
  return (
    <div>
      <h1 data-aos-duration='2000' data-aos="zoom-in" className='text-center text-white py-3 pt-5'  >{props.info}</h1>
    </div>
  )
}
