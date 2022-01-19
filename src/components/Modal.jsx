import React from 'react';
import ContactUs from './ContactUs/ContactUs';

export default function Modal({ showModal, setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div
      className={`w-screen h-screen  fixed top-0 left-0 flex justify-center items-center transition-all ${
        showModal ? 'z-30 opacity-100' : 'z-0 opacity-0 pointer-events-none'
      }`}
    >
      <div
        onClick={closeModal}
        className="backdrop absolute w-full h-full top-0 left-0 bg-black/70"
      ></div>
      <div className="relative z-30 w-full h-full md:w-3/4 max-w-lg flex flex-col justify-between bg-turf rounded-[20px] p-6 lg:max-h-[620px]">
        <div className="flex items-center justify-between">
          <p className="relative top-1 text-border text-white text-xl lg:text-3xl">
            Contact <span className="text-yellow ml-1.5"> Us</span>
          </p>
          <img
            onClick={closeModal}
            className="block w-auto cursor-pointer"
            src="assets/close-icon.svg"
            alt="close"
          />
        </div>
        <ContactUs />
      </div>
    </div>
  );
}
