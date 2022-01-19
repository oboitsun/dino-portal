import React from 'react';
import { links } from '../../db';
import Socials from '../Socials';

function LoginMenuModal({ showMenu, setShowMenu }) {
  const closeModal = () => {
    setShowMenu(false);
  };

  return (
    <div
      className={`w-screen h-screen  fixed top-0 left-0 flex justify-center items-center transition-all ${
        showMenu ? 'z-30 opacity-100' : 'z-0 opacity-0 pointer-events-none'
      }`}
    >
      <div
        onClick={closeModal}
        className="backdrop absolute w-full h-full top-0 left-0 bg-black/70"
      ></div>
      <div className="relative z-30 w-full h-full md:w-3/4 max-w-lg flex flex-col  bg-turf rounded-[20px] p-6 lg:max-h-[620px] items-center">
        <div className="flex items-center justify-between w-full">
          <div className=" max-w-[140px]">
            {' '}
            <img className="logo w-full" src="../assets/logo.png" alt="logo" />
          </div>
          <img
            onClick={closeModal}
            className="block w-auto cursor-pointer"
            src="assets/close-icon.svg"
            alt="close"
          />
        </div>
        <div className="flex flex-col items-center w-full   py-16">
          {links.map((link, i) => (
            <div key={i} className="w-full flex flex-col items-center">
              <a
                key={link.text}
                className="text-white uppercase text-lg lg:text-xl text-center"
                href={link.href}
              >
                {link.text}
              </a>
              <div className="h-px w-full bg-white opacity-50 my-10"></div>
            </div>
          ))}
        </div>
        <div className="my-10">
          <Socials />
        </div>
        <div className="">
          <img
            className="logo w-full"
            src="../assets/dfinity-logo.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginMenuModal;
