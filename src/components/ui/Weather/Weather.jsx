import React, { useEffect, useState } from 'react'
import './weather.css'
import axios from 'axios'
import img_on from '../../../assets/Weather/On_sun.png'
import img_off from '../../../assets/Weather/Off_sun.png'

export default function Weather() {
  const [temp, setTemp] = useState({})
  const api = {
    key: '79e846613e2636bd23fc0f92ef909cd1',
    base_url: 'https://api.openweathermap.org/data/2.5/'
  }

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    await axios.get(`${api.base_url}weather?q=Kabul&units=metric&APPID=${api.key}`)
      .then(ress => {
        setTemp(ress.data)
        console.log(ress.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className='weather d-none d-lg-block'>
      {
        (typeof temp.main != 'undefined' ?
          <div>
            <p className='text-light temp'>
              {temp.name}
              <span className='temp_gradus ms-2'>{temp.main.temp}℃</span>
              {
                (+(temp.main.temp)> 10  ) ? <img style={{height: '30px'}} src={img_on} alt="sun img" /> : <img style={{height: '30px'}} src={img_off} alt="sun img" />
              }
            </p>
            <div>

            </div>
          </div>
          :
          ""
        )
      }
    </div>
  )
}
