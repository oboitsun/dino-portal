import React from 'react';
import './main-slide.scss';
export default function MainSlide({ slide, bg }) {
  return (
    <div className="slide-wrapper  relative w-4/5">
      {bg && (
        <img
          className={`slide-bg bg-gallery`}
          src="../../assets/slider1-bg.png"
          alt="bg"
        />
      )}
      <div className="absolute top-10 flex flex-col items-center ">
        <p className="text-border text-2xl text-white">{slide.name}</p>
        <div className="relative -top-1">
          <img src="../../assets/age-pic.png" alt="age" />
          <span className="top-1/2 absolute pt-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs max-w-max w-full">
            {slide.age}
          </span>
        </div>
      </div>
      <div className="relative h-4/5 w-auto mx-auto z-10 ">
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-8xl text-border text-white">
          ?
        </div>
        <img className="h-full  w-auto mask" src={slide.pic} alt={slide.name} />
      </div>
    </div>
  );
}
