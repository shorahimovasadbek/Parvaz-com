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
import { BsArrowRight } from 'react-icons/bs';

export default function Header() {
  return (
    <div className='body_div'>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
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
              <p className='parvaz'>Parvazprof Industrial and Production Company</p>
              <p className='paragraph'>Is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan...</p>
              <Btn/>
            </div>
          </div>
          <div class="carousel-item">
          <p><img src={pvc2} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>Parvazprof Industrial and Production Company</p>
              <p className='paragraph'>Is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan...</p>
              <Btn/>
            </div>
          </div>
          <div class="carousel-item">
          <p><img src={pvc3} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>Parvazprof Industrial and Production Company</p>
              <p className='paragraph'>Is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan...</p>
              <Btn/>
            </div>
          </div>
          <div class="carousel-item">
          <p><img src={qoy} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>Parvazprof Industrial and Production Company</p>
              <p className='paragraph'>Is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan...</p>
              <Btn/>
            </div>
          </div>
          <div class="carousel-item">
          <p><img src={bik} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>Parvazprof Industrial and Production Company</p>
              <p className='paragraph'>Is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan...</p>
              <Btn/>
            </div>
          </div>
          <div class="carousel-item">
          <p><img src={floor} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>Parvazprof Industrial and Production Company</p>
              <p className='paragraph'>Is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan...</p>
              <Btn/>
            </div>
          </div>
          <div class="carousel-item">
          <p><img src={tovuq} class="img" alt="..." /></p>
            <div class="carousel-caption text-start">
              <p className='parvaz'>Parvazprof Industrial and Production Company</p>
              <p className='paragraph'>Is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan...</p>
              <Btn/>
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
