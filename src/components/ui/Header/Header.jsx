import React from 'react'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './header.css'
import pvc1 from '../../../assets/header/pcv1.png'
import pvc2 from '../../../assets/header/pcv2.png'
import pvc3 from '../../../assets/header/pcv3.png'
import qoy from '../../../assets/header/qoy.png'
import bik from '../../../assets/header/bik.png'
import floor from '../../../assets/header/floor.png'
import tovuq from '../../../assets/header/tovuq.png'
import Btn from '../Buttons/Button'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export default function Header() {

  const { t } = useTranslation()
  return (
    <div className='body_div '>
      <div id="carouselExampleCaptions" class="carousel slide container" data-bs-ride="carousel">
        <div class="carousel-indicators d-xl-block">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div class="carousel-inner text-end">
          <div class="carousel-item active">
            <p><img src={pvc1} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>{t('H_carousel_title')}</p>
              <p className='paragraph'>{t('H_carousel_desc_pvc')}</p>
              <Btn pass='/akwin' />
            </div>
          </div>
          <div class="carousel-item">
            <p><img src={pvc2} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>{t('H_carousel_title')}</p>
              <p className='paragraph'>{t('H_carousel_desc_pvc')}</p>
              <Btn pass='/akwin' />
            </div>
          </div>
          <div class="carousel-item">
            <p><img src={pvc3} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>{t('H_carousel_title')}</p>
              <p className='paragraph'>{t('H_carousel_desc_pvc')}</p>
              <Btn pass='/akwin' />
            </div>
          </div>
          <div class="carousel-item">
            <p><img src={qoy} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>{t('H_carousel_title')}</p>
              <p className='paragraph'>{t('H_carousel_desc')}</p>
              <Btn pass='/animal' />
            </div>
          </div>
          <div class="carousel-item">
            <p><img src={bik} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>{t('H_carousel_title')}</p>
              <p className='paragraph'>{t('H_carousel_desc')}</p>
              <Btn pass='/animal' />
            </div>
          </div>
          <div class="carousel-item">
            <p><img src={floor} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>{t('H_carousel_title')}</p>
              <p className='paragraph'>{t('H_carousel_desc_flour')}</p>
              <Btn pass='/flour' />
            </div>
          </div>
          <div class="carousel-item">
            <p><img src={tovuq} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>{t('H_carousel_title')}</p>
              <p className='paragraph'>{t('H_carousel_desc')}</p>
              <Btn pass='/animal' />
            </div>
          </div>
        </div>
        <button class=" d-none carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class=" d-none carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
