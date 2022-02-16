import React from 'react';
import AgeButton from '../AgeButton';
import { useDispatch } from 'react-redux';
import { setEgg } from '../../reducers/EggHatchReducer';
import { showEggHatchModal } from '../../reducers/uiReducer';
export default function GallerySlide({ isEgg, slide, bgSrc }) {
  const dispatch = useDispatch();
  const showHatchModal = () => {
    dispatch(setEgg(slide));
    dispatch(showEggHatchModal(true));
  };
  return (
    <div className="  flex flex-col items-center gap-2">
      <div className="slide-wrapper">
        <img
          className={`bg-gallery`}
          src={bgSrc ? bgSrc : '../../assets/slider1-bg.png'}
          alt="bg"
        />

        <div className="absolute top-10 flex flex-col items-center ">
          <p className="text-border text-2xl text-white">{slide.name}</p>
          <div className="relative -top-1">
            <div className="absolute w-full h-full ">
              <AgeButton />
            </div>
            <span className="py-2 px-4 relative z-[2] top-px text-white text-xs max-w-max w-full">
              {slide.age}
            </span>
          </div>
        </div>
        {/* <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] text-8xl text-border text-white">
          ?
        </div> */}
        <img
          className="h-4/5 w-auto z-[2] absolute bottom-0 left-1/2 transform -translate-x-1/2 "
          src={slide.pic}
          alt={slide.name}
        />
      </div>
      {isEgg && (
        <button
          onClick={isEgg && showHatchModal}
          className="bg-yellow w-full text-white border-[3px] border-myBlack rounded-xl leading-none py-3"
        >
          <span className="relative top-0.5">Hatch egg</span>
        </button>
      )}
    </div>
  );
}
