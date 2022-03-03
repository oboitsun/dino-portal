import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

import './home-slider.scss';
import ThumbSlide from '../ThumbsSlide';
import MainSlide from '../MainSlide';
import { backs, randomBgIndex } from '../../utils';
import { dinos } from '../../db';
export default function HomeSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [currentImgBG, setCurrentImageBG] = useState('assets/slider1-bg.png');

  useEffect(() => {
    setCurrentImageBG(backs[randomBgIndex(backs)]);
  }, []);
  return (
    <div id="home-slider" className="overflow-hidden relative h-full">
      <div id="home-slider-prev" className="slider-button prev">
        <img src="../../assets/arrow-next.svg" alt="prev" />
      </div>
      <div className="slider-button next">
        <img
          id="home-slider-next"
          src="../../assets/arrow-next.svg"
          alt="prev"
        />
      </div>

      <Swiper
        // autoplay={{ delay: 2500 }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
        navigation={{
          nextEl: '#home-slider-next',
          prevEl: '#home-slider-prev',
        }}
      >
        <div className="slider-bg-big ">
          {/* <img
            className="object-cover w-full  h-full"
            src={currentImgBG}
            alt="bg"
          /> */}
        </div>
        {dinos.map((slide, i) => (
          <SwiperSlide key={i}>
            <MainSlide slide={slide} bg />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {dinos.map((slide, i) => (
          <SwiperSlide key={i}>
            <ThumbSlide
              thumbLocation="home"
              bgSrc={currentImgBG}
              slide={slide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
