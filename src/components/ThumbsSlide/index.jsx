import React from "react";
import "./thumbs-slide.scss";
export default function ThumbSlide({ slide, active = false, bgSrc, ...props }) {
  return (
    <div
      {...props}
      className={`cursor-pointer flex flex-col justify-between h-full nft-wrap relative ${
        active ? "active" : ""
      }`}
    >
      <div className="nft-img">
        <img className="w-full slide-pic " src={slide.pic} alt={slide.name} />
        <img
          className="abs-centering slider-bg-thumb"
          src={bgSrc ? bgSrc : "assets/slider1-bg.png"}
          alt="bg"
        />
      </div>

      <div className=" flex flex-col items-center  bio-wrapper">
        <p className="text-border text-sm text-white">{slide.name}</p>
        <div className="relative -top-1">
          <img src="../../assets/age-pic.png" alt="age" />
          <span className="slide-age">{slide.age}</span>
        </div>
      </div>
    </div>
  );
}
