import React, { useEffect } from 'react'
import './footer.css'
// import footer_img from '../../../assets/footer_images/image 22.png'
import logo_img from '../../../assets/footer_images/logo.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {useTranslation} from 'react-i18next'

export default function App() {
  const {t} = useTranslation()
  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <MDBFooter className='text-center footer text-lg-start text-light'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto  mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                <img className='img_logo' src={logo_img} alt="logo img" />
              </h6>
              <p>
                {t("F_desc")}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>{t("Q_Menu")}</h6>
              <p>
                <a href='#!' className='text-reset'>
                  {t("Q_Menu_lists_home")}
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                {t("Q_Menu_lists_about")}
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                {t("Q_Menu_lists_product")}
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                {t("Q_Menu_lists_contact")}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>{t("Contact_footer")}</h6>
              <p>
                <a href='#!' className='text-reset'>
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

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        {t("powered")}
        <a className='text-reset fw-bold ms-3' href='#'>
          {t("name_company")}
        </a>
      </div>
    </MDBFooter>
  );
}