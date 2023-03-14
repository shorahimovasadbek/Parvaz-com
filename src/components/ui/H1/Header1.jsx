import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header1(props) {
  useEffect(() => {
    AOS.init()
}, []);

const style = {
  color: 'white'
}

  return (
    <div>
      <h1 style = {style} data-aos-duration='2000' data-aos="zoom-in" className='text-center py-3 pt-5'  >{props.info}</h1>
    </div>
  )
}
