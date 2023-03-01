import React from 'react'

export default function Header1(props) {
  console.log(props);
  return (
    <div>
      <h1 className='text-center text-white py-3'>{props.info}</h1>
    </div>
  )
}
