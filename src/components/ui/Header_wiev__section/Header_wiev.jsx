import React, {useEffect} from 'react'
import './header_wiev.css'
import 'aos/dist/aos.css'
import Aos from 'aos'

export default function Header_wiev(props) {

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div className='header' style={{backgroundImage: `url(${props.state.src})`}}>
      <div className='pattern_black'>
        <div className='d-flex align-items-center flex-column texts'>
          <p data-aos='fade-up' data-aos-duration='1000'>{props.state.name}</p>
          <p data-aos='fade-up' data-aos-duration='1000'>{props.state.title}</p>
        </div>
      </div>
    </div>
  )
}
