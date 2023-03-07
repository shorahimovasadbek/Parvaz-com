import img_logo from '../../../assets/footer_images/logo.png'
import indicator from '../../../assets/header/Stroke 1.png'
import React, { useEffect } from 'react';
import "./navbar.css";
import 'aos/dist/aos.css'
import Aos from 'aos';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'



export default function App() {
  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={img_logo} alt="logo img" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ps-3">
          <Nav className="me-auto"></Nav>
          <Nav className='ms-4 ms-md-0'>
            <Nav.Link href="#deets"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Link to='/about'>
                About us
              </Link>
            </Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to='/akwin'>Akwin </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to='/animal'>Animal foods</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to='flour'>Floor</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#'><Link to='/contact'>Contact</Link></Nav.Link>
            <NavDropdown className='ms-0 ms-lg-4 language' title="Eng" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='text-muted' disabled> Eng </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"> Ru </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Uz </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Fr </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}