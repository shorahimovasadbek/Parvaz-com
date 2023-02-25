import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination , Autoplay } from "swiper";
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
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                pagination={true}
                modules={[EffectCoverflow, Pagination , Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Index;
