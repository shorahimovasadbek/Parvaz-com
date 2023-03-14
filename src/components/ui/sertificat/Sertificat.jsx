import React from 'react'
import img1 from '../../../assets/Iso_images/image11.png'
import img2 from '../../../assets/Iso_images/image14.png'
import img3 from '../../../assets/Iso_images/image17.png'
import img4 from '../../../assets/Iso_images/image18.png'
import './sertificat.css'
import ModalImage from "react-modal-image";

export default function Sertificat() {
  return (
    <div className='container text-center sertificats my-5'>
      <p className='iso__sertificats'>ISO Certificates</p>
      <div className="row mt-4 align-items-center">
        <div className="col-12 justify-content-center d-flex col-md-6 col-lg-3">
          <div className="card">
            <ModalImage
              small={img3}
              large={img3}
              alt={"Sertificate"}
              hideDownload={false}
              hideZoom={false}
              className="img-fluid modal-image"
            />
          </div>
        </div>
        <div className="col-12 justify-content-center d-flex col-md-6 col-lg-3">
          <div className="card">
          <ModalImage
              small={img1}
              large={img1}
              alt={"Sertificate"}
              hideDownload={false}
              hideZoom={false}
              className="img-fluid modal-image"
            />
          </div>
        </div>
        <div className="col-12 justify-content-center d-flex col-md-6 col-lg-3">
          <div className="card">
             <ModalImage
              small={img2}
              large={img2}
              alt={"Sertificate"}
              hideDownload={false}
              hideZoom={false}
              className="img-fluid modal-image"
            />
          </div>
        </div>
        <div className="col-12 justify-content-center d-flex col-md-6 col-lg-3">
          <div className="card">
          <ModalImage
              small={img4}
              large={img4}
              alt={"Sertificate"}
              hideDownload={false}
              hideZoom={false}
              className="img-fluid modal-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
