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
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="7" className='mx-auto '>
              <h6 className='text-uppercase fw-bold'>
                <MDBIcon icon="gem" />
                <img className='img_logo' src={logo_img} alt="logo img" />
              </h6>
              <p>
                {t("F_desc")}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto bottom_div'>
              <h6 className='text-uppercase fw-bold'>{t("Q_Menu")}</h6>
              <p>
                <a onClick={() => { window.location.href = '/' }} className='text-reset'>
                  {t("Q_Menu_lists_home")}
                </a>
              </p>
              <p>
                <a onClick={() => { window.location.href = '/about' }} className='text-reset'>
                {t("Q_Menu_lists_about")}
                </a>
              </p>
              <p>
                <a onClick={() => { window.location.href = '/akwin' }} className='text-reset'>
                {t("Q_Menu_lists_product")}
                </a>
              </p>
              <p>
                <a onClick={() => { window.location.href = '/contact' }} className='text-reset'>
                {t("Q_Menu_lists_contact")}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto bottom_div'>
              <h6 className='text-uppercase fw-bold'>{t("Contact_footer")}</h6>
              <p>
                <a onClick={() => { window.location.href = '/contact' }}  href='#!' className='text-reset'>
                  {t("Contact_us")}
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  {t("Contact_email")}
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        {t("powered")}
        <a className='text-reset fw-bold ms-3' href='#'>
          {t("name_company")}
        </a>
      </div>
    </MDBFooter>
  );
}