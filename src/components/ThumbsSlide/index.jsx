import React from 'react';
import AgeButton from '../AgeButton';
import { useDispatch } from 'react-redux';
import './thumbs-slide.scss';
import { setEgg } from '../../reducers/EggHatchReducer';
import { showEggHatchModal } from '../../reducers/uiReducer';
export default function ThumbSlide({
  thumbLocation = 'page',
  isEgg,
  slide,
  active = false,
  bgSrc,
  ...props
}) {
  const dispatch = useDispatch();
  const showHatchModal = () => {
    dispatch(setEgg(slide));
    dispatch(showEggHatchModal(true));
  };
  const nameSizes = {
    home: 'text-[50%] xl:text-[70%]',
    page: 'text-[90%] ',
  };
  return (
    <div
      {...props}
      className={`cursor-pointer flex flex-col justify-between h-full nft-wrap relative ${
        active ? 'active' : ''
      }`}
    >
      <div className="nft-img">
        {isEgg && (
          <button
            onClick={isEgg && showHatchModal}
            className="block absolute z-[3] top-2 left-1/2 -translate-x-1/2 w-auto h-auto transform hover:scale-110"
          >
            <div className="absolute top-0 left-0 w-full h-full  ">
              <AgeButton />
            </div>
            <p className="min-w-max py-0.5 relative z-[4] px-2 top-px text-white text-[8px]">
              Hatch egg
            </p>
          </button>
        )}
        <img className="w-full slide-pic " src={slide.pic} alt={slide.name} />
        <img
          className="abs-centering slider-bg-thumb"
          src={bgSrc ? bgSrc : 'assets/slider1-bg.png'}
          alt="bg"
        />
      </div>

      <div
        className={`flex flex-col items-center  bio-wrapper relative z-[11]  ${
          thumbLocation === 'home' ? '' : 'pt-2'
        }`}
      >
        <p
          className={`text-border text-center leading-1  text-white ${nameSizes[thumbLocation]}`}
        >
          {slide.name}
        </p>
        <div
          className={`relative   px-4  flex justify-center items-center ${
            thumbLocation === 'home' ? '-top-1' : '-top-2'
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <AgeButton />
          </div>
          <p className="relative top-1 py-2 z-[2] text-xs xl:text-base text-white leading-[0.8]">
            {slide.age}
          </p>
        </div>
      </div>
    </div>
  );
}
