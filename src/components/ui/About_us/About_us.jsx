import React, {useState, useEffect} from 'react'
import back_img from '../../../assets/About_us/About_us.png'
import akwin from '../../../assets/About_us/akwin.png'
import cow from '../../../assets/About_us/cow.png'
import factory from '../../../assets/About_us/factory.png'
import worker from '../../../assets/About_us/workers.png'
import 'aos/dist/aos.css'
import Aos from 'aos'
import './about_us.css'

export default function About_us() {

  useEffect(() => {
    Aos.init()
  }, []);

  const [mass, setMass] = useState([
    {
      title: 'About out Parvazprof Industrial and Production Company',
      description: 'Parvazprof Industrial and Production Company (the Company) is a company registered in Ministry of Commerce and Industries, activity of the Company is to manufacture and sell all kinds of PVC proﬁles for windows and doors items.Parvazprof Industrial and Production Company is intertwined with the construction sector since 2009, and has begun production of PVC proﬁle which is an indispensable for modern construction, in 2009 under the “VINKA” brand name.',
      src1: worker,
      src2: akwin
    },
    {
      title: 'About out Parvazprof Industrial and Production Company',
      description: 'Parvazprof Industrial and Production Company (the Company) is a company registered in Ministry of Commerce and Industries, activity of the Company is to manufacture and sell all kinds of PVC proﬁles for windows and doors items.Parvazprof Industrial and Production Company is intertwined with the construction sector since 2009, and has begun production of PVC proﬁle which is an indispensable for modern construction, in 2009 under the “VINKA” brand name.',
      src1: factory,
      src2: cow
    }
  ]);


  return (
    <div className='big_content'>
      <div className="container">
        {
          (mass) && mass.map((item, index) => {
            return (
              <div className={`row d-flex align-items-center text-center my-5 ${(index%2 === 1 ? 'content_top' : 'content_bottom')}`} key={index}>
                <div data-aos='fade-down' data-aos-duration='1000' className={`col-12 col-md-6 ${(index % 2 === 0 ? 'order-last' : 'order-first')}`}>
                  <p className='border-bottom border-2 border-md-3 w-100 my-2 my-md-5'></p>
                  <h4>{item.title}</h4>
                  <p className='px-3 text-start  description'>{item.description}</p>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000' className='col-12 col-md-6'>
                  <p><img className='w-75 h-25' src={item.src1} alt={item.title}/></p>
                  <p><img className='w-75 h-25' src={item.src2} alt={item.title}/></p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
