import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import image1 from '../../../../assets/1.png'
import image2 from '../../../../assets/2.png'
import image3 from '../../../../assets/3.png'
import '../slider/main.css'

const Index = () => {


    return (
        <div >
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Index;
