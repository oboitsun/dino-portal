import React from 'react';
import GallerySlide from '../NFTsGallery/GallerySlide';
import './ModalAbout.scss';

export default function ModalAbout({ show, setShow, slide }) {
  const handleCloseModal = () => {
    setShow(false);
  };
  const Field = ({ label, value, divider = true }) => (
    <div className="ModalAbout__field">
      <p className="label">{label}:</p>
      <p className="value"> {value}</p>
      {divider && <div className="divider h-0.5 w-full bg-white/50 mt-4"></div>}
    </div>
  );
  const fields = [
    { label: 'eye colour', value: 'red' },
    { label: 'skin colour', value: 'white' },
    { label: 'rarity', value: 'normal' },
    { label: 'age', value: 'baby' },
    { label: 'gender', value: 'female' },
    { label: 'info', value: 'Info field', divider: false },
  ];
  return (
    <div
      onClick={handleCloseModal}
      className={`ModalAbout ${show ? 'show' : ''}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="ModalAbout__inner"
      >
        <div className="ModalAbout_about p-10">
          <p className="text-border text-yellow text-2xl pb-10">My Dino</p>
          <div className="grid gap-6">
            {fields.map((f) => (
              <Field key={f.label} {...f} />
            ))}
            <button className="rounded-full bg-yellow text-xl w-full py-5">
              <span className="relative top-0.5 text-white  ">Sell dino</span>
            </button>
          </div>
        </div>
        <div className="ModalAbout__slide relative">
          <button
            onClick={handleCloseModal}
            className="w-8 h-8 rounded-full bg-myBlack p-2 top-2 right-2 absolute z-10"
          >
            <img
              className="w-full"
              src="/assets/close-icon.svg"
              alt="close modal"
            />
          </button>
          <GallerySlide isEgg={false} bgSrc={slide?.back} slide={slide} bg />
        </div>
      </div>
    </div>
  );
}
