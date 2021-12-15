import { useState, useEffect } from "react";
import ThumbsSlide from "../../components/ThumbsSlide/";

import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import StoreButton from "../../components/StoreButton";
import "./nft-gallery.scss";
import GallerySlide from "./GallerySlide";
import { backs, randomBgIndex } from "../../utils";

export default function NFTsGallery({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImgBG, setCurrentImageBG] = useState("assets/slider1-bg.png");

  useEffect(() => {
    setCurrentImageBG(backs[randomBgIndex(backs)]);
  }, []);
  return (
    <div className="nft-gallery-page">
      <div className="grid grid-cols-2 gap-10 auto-rows-max h-full flex-grow">
        <div className="w-full h-auto relative">
          <SectionHeaderBackNav pageName="My Dino" />
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-white"></div>
        </div>
        <StoreButton />
        <div className="w-full  flex-grow  gallery auto-rows-min grid  grid-cols-4 gap-x-5 gap-y-6  overflow-y-auto ">
          {slides.map((slide, i) => (
            <ThumbsSlide
              bgSrc={currentImgBG}
              onClick={() => {
                setCurrentSlide(i);
              }}
              key={i}
              slide={slide}
              active={i === currentSlide}
            />
          ))}
        </div>
        <div className="picture  relative max-h-[572px]">
          <GallerySlide bgSrc={currentImgBG} slide={slides[currentSlide]} bg />
        </div>
      </div>
    </div>
  );
}
