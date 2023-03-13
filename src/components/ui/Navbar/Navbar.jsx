import img_logo from '../../../assets/footer_images/logo.png'
import indicator from '../../../assets/header/Stroke 1.png'
import React, { useEffect, useState } from 'react';
import "./navbar.css";
import 'aos/dist/aos.css'
import Aos from 'aos';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Weather from '../Weather/Weather';



export default function App() {

  const [lang, setLang] = useState((localStorage.getItem('language') ? localStorage.getItem('language') : 'En'))

  const { t, i18n } = useTranslation()

  const changeLanguage = (til) => {

    if (til === 'En') {
      setLang('En')
      localStorage.setItem('language', 'En')
    } else if (til === 'Ru') {
      setLang('Ru')
      localStorage.setItem('language', 'Ru')
    } else if (til === 'Fr') {
      setLang('Fr')
      localStorage.setItem('language', 'Fr')
    } else {
      setLang('Uz')
      localStorage.setItem('language', 'Uz')
    }
    i18n.changeLanguage(til)
  }

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand><Link onClick={() => { window.location.href = '/' }}><img src={img_logo} alt="logo img" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ps-3">
          <Nav className="me-auto"></Nav>
          <Nav className='ms-4 ms-md-0'>
            <Nav.Link><Link onClick={() => { window.location.href = '/' }}>{t('N_home')}</Link></Nav.Link>
            <Nav.Link eventKey={2}>
              <Link onClick={() => { window.location.href = '/about' }}>
                {t('N_about_us')}
              </Link>
            </Nav.Link>
            <NavDropdown title={t("N_Products")} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => { window.location.href = '/akwin' }}>{t('N_P_Akwin')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { window.location.href = '/animal' }}>
                {t("N_P_Animal")}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => { window.location.href = '/flour' }}>{t("N_P_Flour")}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link onClick={() => { window.location.href = '/contact' }}>{t("N_Contact")}</Link></Nav.Link>
            <Nav.Link className='last_item'><Link onClick={() => { window.location.href = '/contact' }}>
              <span><Weather /> <span className='number d-none d-lg-block'>Tel: 0791987987 / 0785965555</span></span>
            </Link></Nav.Link>
            <NavDropdown className='ms-0 ms-lg-4 language' title={lang} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => changeLanguage('En')}> Eng </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('Ru')}> Ru </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('Uz')}> Uz </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('Fr')}> Fr </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}