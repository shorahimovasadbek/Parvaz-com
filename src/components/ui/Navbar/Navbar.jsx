import img_logo from '../../../assets/footer_images/logo.png'
import indicator from '../../../assets/header/Stroke 1.png'
import React, { useEffect, useState, lazy } from 'react';
import "./navbar.css";
import 'aos/dist/aos.css'
import Aos from 'aos';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BsTelephone } from 'react-icons/bs'
import UZB from '../../../assets/Flags/uzb.png'
import RUS from '../../../assets/Flags/Rus.webp'
import FOR from '../../../assets/Flags/Fors.png'
import ENG from '../../../assets/Flags/AQsh.png'
const Weather = lazy(() => import('../Weather/Weather.jsx'));


export default function App() {

  const [lang, setLang] = useState((localStorage.getItem('language') ? localStorage.getItem('language') : 'En'))
  const [bottom1, setBottom1] = useState(true)
  const [bottom2, setBottom2] = useState(false)
  const [bottom3, setBottom3] = useState(false)
  const [bottom4, setBottom4] = useState(false)
  const { t, i18n } = useTranslation()

  const changeLanguage = (til) => {

    if (til === 'En') {
      setLang('En')
      localStorage.setItem('language', 'En')
      setBottom1(true)
      setBottom2(false)
      setBottom3(false)
      setBottom4(false)
    } else if (til === 'Ru') {
      setLang('Ru')
      localStorage.setItem('language', 'Ru')
      setBottom1(false)
      setBottom2(true)
      setBottom3(false)
      setBottom4(false)
    } else if (til === 'Uz') {
      setLang('Uz')
      localStorage.setItem('language', 'Uz')
      setBottom1(false)
      setBottom2(false)
      setBottom3(true)
      setBottom4(false)
    } else {
      setLang('Fr')
      localStorage.setItem('language', 'Fr')
      setBottom1(false)
      setBottom2(false)
      setBottom3(false)
      setBottom4(true)
    }
    i18n.changeLanguage(til)
  }

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div className='big_content__navbar px-0'>
      <div className='nav_top__section'>
        <div className='d-flex align-items-center'>
          <div><span><Weather /></span></div>
          <span className='mx-3'> | </span>
          <div className='phone_number d-none d-lg-block'> <a href="tel:0791987987"><BsTelephone className='me-2' />0791987987</a> </div>
          <span className='mx-3'> | </span>
          <div className='phone_number d-none d-lg-block'> <a href="tel:0785965555"><BsTelephone className='me-2' />0785965555</a> </div>
        </div>
        <div className='d-flex flags'>
          <NavDropdown.Item className={`align-items-center d-flex`} onClick={() => changeLanguage('En')}> <p><img src={ENG} alt="en" /></p><p className={`${(bottom1)? 'border-bottom': 'border-none'}`}>En</p> </NavDropdown.Item>
          <NavDropdown.Item className={`align-items-center d-flex`} onClick={() => changeLanguage('Ru')}> <p><img src={RUS} alt="ru" /></p><p className={`${(bottom2)? 'border-bottom': 'border-none'}`}>Ru</p> </NavDropdown.Item>
          <NavDropdown.Item className={`align-items-center d-flex`} onClick={() => changeLanguage('Uz')}> <p><img src={UZB} alt="uz" /></p><p className={`${(bottom3)? 'border-bottom': 'border-none'}`}>Uz</p> </NavDropdown.Item>
          <NavDropdown.Item className={`align-items-center d-flex`} onClick={() => changeLanguage('Fr')}> <p><img src={FOR} alt="af" /></p><p className={`${(bottom4)? 'border-bottom': 'border-none'}`}>Fr</p> </NavDropdown.Item>
        </div>
      </div>
      <Navbar className='' collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand><Link onClick={() => { window.location.href = '/' }}><img className='logo_img' src={img_logo} alt="logo img" /></Link></Navbar.Brand>
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
              {/* <NavDropdown className='ms-0 ms-lg-4 language' title={lang} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => changeLanguage('En')}> Eng </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('Ru')}> Ru </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('Uz')}> Uz </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('Fr')}> Fr </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}