import React from 'react'
import img1 from '../../../assets/Iso_images/image11.png'
import img2 from '../../../assets/Iso_images/image14.png'
import img3 from '../../../assets/Iso_images/image17.png'
import img4 from '../../../assets/Iso_images/image18.png'
import './sertificat.css'

export default function Sertificat() {
  return (
    <div className='container text-center sertificats my-5'>
      <p className='iso__sertificats'>ISO Certificates</p>
      <div className="row mt-4">
        <div className="col-12 col-md-6 col-lg-3"> 
          <img src={img3} alt="sertificat3" />
        </div>
        <div className="col-12 col-md-6 col-lg-3"> 
          <img src={img1} alt="sertificat1" />
        </div>
        <div className="col-12 col-md-6 col-lg-3"> 
          <img src={img2} alt="sertificat2" />
        </div>
        <div className="col-12 col-md-6 col-lg-3"> 
          <img src={img4} alt="sertificat4" />
        </div>
      </div>
    </div>
  )
}
