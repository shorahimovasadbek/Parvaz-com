import React from 'react'
import './header_wiev.css'

export default function Header_wiev(props) {
  return (
    <div className='header' style={{backgroundImage: `url(${props.state.src})`}}>
      <div className='pattern_black'>
        <div className='d-flex align-items-center flex-column texts'>
          <p>{props.state.name}</p>
          <p>{props.state.title}</p>
        </div>
      </div>
    </div>
  )
}
