import React, { useEffect } from 'react'
import './footer.css'
// import footer_img from '../../../assets/footer_images/image 22.png'
import logo_img from '../../../assets/footer_images/logo.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {useTranslation} from 'react-i18next'
import img from '../../../assets/footer.png'

export default function App() {
  const styles = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    };
  const {t} = useTranslation()
  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <MDBFooter className='text-center footer text-lg-start text-light foot' style={styles}>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol data-aos-duration='1000' data-aos="fade-up" md="3" lg="4" xl="3" className='mx-auto  mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                <img className='img_logo' src={logo_img} alt="logo img" />
              </h6>
              <p>
                {t("F_desc")}
              </p>
            </MDBCol>

            <MDBCol data-aos-duration='1000' data-aos="fade-up" md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Menu</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home page
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contacts
                </a>
              </p>
            </MDBCol>

            <MDBCol data-aos-duration='1000' data-aos="fade-up" md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Contact us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  parvozprof@gmail.com
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Powered by:
        <a className='text-reset fw-bold ms-3' href='#'>
          Soff Hub
        </a>
      </div>
    </MDBFooter>
  );
}