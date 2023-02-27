import React, { useState } from 'react'
import img_logo from '../../../assets/footer_images/logo.png'
import "./navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Navbar() {


  const [selected, setSelected] = useState([]);

  return (
    <div className='header'>
      <img src={img_logo} alt='logo img' />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li className='drop'>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </li>
        <li>Contact</li>
        <li className='language'>Eng</li>
      </ul>
    </div>
  )
}
