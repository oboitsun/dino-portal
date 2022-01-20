import { useState, useEffect } from 'react';
import ThumbsSlide from '../../components/ThumbsSlide/';
import './nft-gallery.scss';
import GallerySlide from './GallerySlide';
import { backs, randomBgIndex } from '../../utils';

export default function NFTsGallery({ slides, isEgg = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImgBG, setCurrentImageBG] = useState('assets/slider1-bg.png');

  useEffect(() => {
    setCurrentImageBG(backs[randomBgIndex(backs)]);
  }, []);
  return (
    <>
      <div className="w-full  flex-grow  gallery auto-rows-min grid col-span-2 lg:col-span-1  grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
        {slides.map((slide, i) => (
          <ThumbsSlide
            isEgg={isEgg}
            bgSrc={slide?.back || currentImgBG}
            onClick={() => {
              setCurrentSlide(i);
            }}
            key={i}
            slide={slide}
            active={i === currentSlide}
          />
        ))}
      </div>
      <div className="picture  relative max-h-[572px] col-span-2 lg:col-span-1 lg:col-start-2 row-start-3 lg:row-start-2">
        <GallerySlide
          isEgg={isEgg}
          bgSrc={slides[currentSlide]?.back || currentImgBG}
          slide={slides[currentSlide]}
          bg
        />
      </div>
    </>
  );
}
