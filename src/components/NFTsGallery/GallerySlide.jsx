import React from "react";

export default function GallerySlide({ slide, bgSrc }) {
  return (
    <div className="slide-wrapper h-full ">
      <img
        className={`bg-gallery`}
        src={bgSrc ? bgSrc : "../../assets/slider1-bg.png"}
        alt="bg"
      />

      <div className="absolute top-10 flex flex-col items-center ">
        <p className="text-border text-2xl text-white">{slide.name}</p>
        <div className="relative -top-1">
          <img src="../../assets/age-pic.png" alt="age" />
          <span className="top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs max-w-max w-full">
            {slide.age}
          </span>
        </div>
      </div>
      <img
        className="w-full z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src={slide.pic}
        alt={slide.name}
      />
    </div>
  );
}
