import React, {useState, useEffect} from 'react'
import './flour.css'
import flour1 from '../../../assets/flour/floor1.png'
import flour2 from '../../../assets/flour/floor2.png'
import flour3 from '../../../assets/flour/floor3.png'
import flour4 from '../../../assets/flour/floo4.png'
import background_flour from '../../../assets/flour/floor_header.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header_wiev from '../Header_wiev__section/Header_wiev'

export default function Floor() {
  const [mass, setMass] = useState([
    {
      src: flour1,
      name: 'Cengiz Flour',
      sort: 'High Class | Hard Wheat Flour',
      description: "Made from high-protein hard wheat products, Cengiz is perfect for making premium quality raised breads such as pan Amerikano (open-top), tasty breads (closed-top), and pan de sal. It is also perfect for making pastries such as croissants and cinnamon rolls. The higher protein content in hard wheat contributes a higher level of gluten, which helps make bread more elastic and textured. It is also responsible for the increased water absorption of the flour, which provides greater yield for bakery owners. Its low ash content is responsible for the flour's light color."
    },
    {
      src: flour2,
      name: 'Cengiz Flour',
      sort: 'Firs Class | Hard Wheat Flour',
      description: "Made from high-protein hard wheat products, Cengiz is perfect for making premium quality raised breads such as pan Amerikano (open-top), tasty breads (closed-top), and pan de sal. It is also perfect for making pastries such as croissants and cinnamon rolls. The higher protein content in hard wheat contributes a higher level of gluten, which helps make bread more elastic and textured. It is also responsible for the increased water absorption of the flour, which provides greater yield for bakery owners. Its low ash content is responsible for the flour's light color."
    },
    {
      src: flour3,
      name: 'Cengiz Flour',
      sort: 'Twice Class | Hard Wheat Flour',
      description: "Made from high-protein hard wheat products, Cengiz is perfect for making premium quality raised breads such as pan Amerikano (open-top), tasty breads (closed-top), and pan de sal. It is also perfect for making pastries such as croissants and cinnamon rolls. The higher protein content in hard wheat contributes a higher level of gluten, which helps make bread more elastic and textured. It is also responsible for the increased water absorption of the flour, which provides greater yield for bakery owners. Its low ash content is responsible for the flour's light color."
    },
    {
      src: flour4,
      name: 'Cengiz Flour',
      sort: 'Third Class | Hard Wheat Flour',
      description: "Made from high-protein hard wheat products, Cengiz is perfect for making premium quality raised breads such as pan Amerikano (open-top), tasty breads (closed-top), and pan de sal. It is also perfect for making pastries such as croissants and cinnamon rolls. The higher protein content in hard wheat contributes a higher level of gluten, which helps make bread more elastic and textured. It is also responsible for the increased water absorption of the flour, which provides greater yield for bakery owners. Its low ash content is responsible for the flour's light color."
    }
  ])

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div className='big_content'>
      <Header_wiev state = {{src: background_flour, name: 'Flour', title:'Cengiz Flour'}}/>
      <div className="container">
        <p className='products'>Products</p>
        <p className='border-bottom border-3'></p>
        {
          (mass) && mass.map((item, index) => {
            return (
              <div className='row align-items-center content'>
                <div  data-aos-duration='1000' data-aos='fade-up' className="col-lg-4 col-12 p-4">
                  <img style={{ width: '100%', height: '100%' }} src={item.src} alt="flou1" />
                </div>
                <div  data-aos-duration='1000' data-aos='fade-down' className='col-lg-8 col-12'>
                  <h2>{item.name}</h2>
                  <p>{item.sort}</p>
                  <p className='fw-lighter'>
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
