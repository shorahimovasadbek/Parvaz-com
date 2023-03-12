import React, { useState, useEffect } from 'react'
import './contact.css'
import contact_back from '../../../assets/Contact/contact.png'
import location from '../../../assets/Contact/contact_location.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {

  useEffect(() => {
    Aos.init()
  }, [])


  const [mass, setMass] = useState(
    [
      {
        name: 'SHEBIRGHAN',
        number: '0786140019',
        address: 'AQCHA PORT, BUILDING OF HAJE SHOKUR',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51201.33259030446!2d65.71716713399859!3d36.67249846627957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f36841a248302fd%3A0x5fdec4c1b4bcb0a6!2z0KjQuNCx0LDRgNCz0LDQvSwg0JDRhNCz0LDQvdC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1678114437912!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      {
        name: 'KUNDUZ',
        number: '0799207510',
        address: 'Bandar Khanabad Molavi Serajuddin Street',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102351.1756619311!2d68.81299242946497!3d36.711170103739335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38cbffa05e4f9665%3A0xb9fea05d9d615b22!2z0JrRg9C90LTRg9C3LCDQkNGE0LPQsNC90LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1678114751367!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      [
        {
          name_main: 'MAZAR-E-SHARIF'
        },
        [
          {
            name: 'BASHASH COMPANY',
            number: '0799178585',
            address: 'Chawk Zabihullah Shaheed',
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204723.5828516418!2d66.87731249915021!3d36.70319991023886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f34b8a3605314bd%3A0xb27a5e1a6c1fcf71!2z0JzQsNC30LDRgNC4LdCo0LDRgNC40YQsINCQ0YTQs9Cw0L3QuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1678116272855!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          },
          {
            name: 'ROT WEN COMPANY',
            number: '0799494815',
            address: 'Chawk Zabihullah Shaheed',
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204723.5828516418!2d66.87731249915021!3d36.70319991023886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f34b8a3605314bd%3A0xb27a5e1a6c1fcf71!2z0JzQsNC30LDRgNC4LdCo0LDRgNC40YQsINCQ0YTQs9Cw0L3QuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1678116272855!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          },
          {
            name: 'ASADULLAH RAHIMI COMPANY',
            number: '0799577700',
            address: 'Shadian Gate Guzar I se dokan',
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204723.5828516418!2d66.87731249915021!3d36.70319991023886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f34b8a3605314bd%3A0xb27a5e1a6c1fcf71!2z0JzQsNC30LDRgNC4LdCo0LDRgNC40YQsINCQ0YTQs9Cw0L3QuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1678116272855!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          }
        ]
      ],
      {
        name: 'HERAT',
        number: '0798403075',
        address: 'SARAK 64 METRE , FRONT OF SAFI MARKET',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52702.08638058019!2d62.17605046748124!3d34.353521874946686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce6a894be6cf7%3A0x9db9f81752d677c4!2z0JPQtdGA0LDRgiwg0JDRhNCz0LDQvdC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1678116480886!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      {
        name: 'USA: 7300 beach blvd',
        number: '+1 (904) 444-1389',
        address: 'Jacksonville Florida 32216 USA',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55128.40725524224!2d-81.62057455888025!3d30.27909951308636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b5c1e33593c9%3A0x9b587022b8a6fddb!2z0JTQttC10LrRgdC-0L3QstC40LvQuywg0KTQu9C-0YDQuNC00LAgMzIyMTYsINCh0KjQkA!5e0!3m2!1sru!2s!4v1678185626972!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      {
        name: 'Uz: 8/1 Bunyodkor Avenue',
        number: '+998 99-720-79-92 / +998998991312',
        address: 'Tashkent 100115 Uzbekistan',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.144683300428!2d69.23658091506277!3d41.30571600901773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba9c7000001%3A0xb0c161ca741621d6!2zOCwgODY0USs5UFAsIDEgQnVueW9ka29yIEF2ZW51ZSwgVGFzaGtlbnQgMTAwMDM1LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1678185750907!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      {
        name: 'Kz: Al Farabi, Mustafina',
        number: '+7 707 507 9911',
        address: ' Orbita -2 Almaty, Kazakhstan Аль Фараби, Мустафина, Орбита - 2',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.943537876332!2d68.85812038256317!3d42.99436736104147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aa006448422413%3A0x2cd91afb7427a0e7!2z0JDQu9GMLdCk0LDRgNCw0LHQuCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2s!4v1678185862145!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      {
        name: 'Tajikistan : Sevostopolsyaka st. 8',
        number: '+992 20 331 1313',
        address: 'Sino district , Dushanbe Tajikistan',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.9572882386!2d68.64149518891266!3d38.56150890450092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d16fd27bf89b%3A0xddf9378ddea1fd44!2z0JTRg9GI0LDQvdCx0LUsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1678185953777!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      [
        {
          name_main: 'KABUL'
        },
        [
          {
            name: 'SALIM KARWAN BRANCH',
            number: '0791987987 / 0785965555',
            address: 'SALIM KARWAN MADINA PLAZA',
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420605.9923280171!2d68.91753733270832!3d34.55395251583596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1694c3c1e6d49%3A0xebdf473578214429!2z0JrQsNCx0YPQuywg0JDRhNCz0LDQvdC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1678116650390!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          },
          {
            name: 'BAGRAMI BRANCH',
            number: '0731402403',
            address: 'SARAK OMOMI, QALAY AHMAD KHAN',
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420605.9923280171!2d68.91753733270832!3d34.55395251583596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1694c3c1e6d49%3A0xebdf473578214429!2z0JrQsNCx0YPQuywg0JDRhNCz0LDQvdC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1678116650390!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          },
          {
            name: 'DEHMAZANG BRANCH',
            number: '0785975555 / 0799466712',
            address: 'DARLAMAN STREET FRONT OF HABIBIYA SCHOOL BESIDE KATEB UNIVERSITY',
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420605.9923280171!2d68.91753733270832!3d34.55395251583596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1694c3c1e6d49%3A0xebdf473578214429!2z0JrQsNCx0YPQuywg0JDRhNCz0LDQvdC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1678116650390!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          }
        ]
      ],
      {
        name: 'GHAZNI',
        number: '0747155418 / 0794254998',
        address: 'CHAWK MUSTUFYAT, MAHMODI MARKET, SHERKAT ZEBA SAZAN',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26601.52037818819!2d68.4032318728015!3d33.548438234524085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d443e10b532347%3A0x364d5d3ca326a1a2!2z0JPQsNC30L3QuCwg0JDRhNCz0LDQvdC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1678116874855!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      {
        name: 'KANDAHAR',
        number: '0700605010 / 0799500554',
        address: 'KHOWAJA AHMADSHAI STREET BESID ALHIKMAT PUMP STATION HANAFI PLAZA KANDAHAR AFGHANISTAN',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108702.55446745976!2d65.68012903821025!3d31.635087191552174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed671baa0e28837%3A0x2759b21c9042aa75!2z0JrQsNC90LTQsNCz0LDRgCwg0JDRhNCz0LDQvdC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1678116962035!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      {
        name: 'MAZAR I SHARIF ( MAIN BRANCH )',
        number: '0794441155',
        address: 'CHAWK MUKHABIRAT, SARAK SIYA GERD MAZAR SHARIF',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102361.59430555941!2d67.07788207923123!3d36.70334791941662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f34b8a3605314bd%3A0xb27a5e1a6c1fcf71!2z0JzQsNC30LDRgNC4LdCo0LDRgNC40YQsINCQ0YTQs9Cw0L3QuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1678117060414!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      },
      {
        name: 'KABUL ( MAIN BRANCH )',
        number: '0799382736 / 0786218216',
        address: 'PARK HAI SANHATY, BAGRAM NEW STREET, 4TH STREET',
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420605.9923280171!2d68.91753733270832!3d34.55395251583596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1694c3c1e6d49%3A0xebdf473578214429!2z0JrQsNCx0YPQuywg0JDRhNCz0LDQvdC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1678116650390!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      }
    ]);

  return (
    <div className='big_content'>
      <h1 className='text-center d-none d-lg-block my-5'>Location</h1>
      <div className='context container'>
        {
          (mass) && mass.map((item, index) => {
            return (
              (Array.isArray(item)) ?
                <div className='px-lg-0 my-4'>
                  <h2>{item[0].name_main}</h2>
                  <ul className='lh-lg'>
                    {
                      item[1].map((result, i) => {
                        return (
                          <div data-aos='fade-right' data-aos-duration='1000' className='d-flex  align-items-center flex-wrap' key={i}>
                            <div className='description'>
                              <li className='main_item'>{result.name}</li>
                              <li>{result.number}</li>
                              <li className='text-lowercase mb-4'>{result.address}</li>
                            </div>
                            <iframe data-aos='fade-left' data-aos-duration='1000' className='map' style={{ height: '300px' }} src={`${result.url}`} ></iframe>
                          </div>
                        )
                      })
                    }
                  </ul>
                </div>
                :
                <div data-aos='fade-up' data-aos-duration='1000' className='px-lg-0 my-4'>
                  {
                    <ul className='d-flex  align-items-center flex-wrap lh-lg'>
                      <div className='description'>
                        <li className='main_item'>{item.name}</li>
                        <li>{item.number}</li>
                        <li className='text-lowercase mb-2'>{item.address}</li>
                      </div>
                      <iframe className='map' style={{ height: '300px' }} src={`${item.url}`} ></iframe>
                    </ul>
                  }
                </div>
            )
          })
        }
      </div>
    </div>
  )
}