import React from 'react';
import { Link } from 'react-router-dom';
import Socials from '../Socials';
import DinosTokenLogo from '../DinosTokenLogo';
function HomeHeaderMenu({ balance, dinoScore, showMenu, setShowMenu }) {
  const closeModal = () => {
    setShowMenu(false);
  };

  return (
    <div
      className={`menu w-screen h-screen  fixed top-0 left-0 flex justify-center items-center transition-all ${
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
            <img className="logo w-full" src="../assets/logo.png" alt="logo" />
          </div>
          <img
            onClick={closeModal}
            className="block w-auto cursor-pointer"
            src="assets/close-icon.svg"
            alt="close"
          />
        </div>
        <div className="flex flex-col items-center w-full pt-14">
          <Link className="text-2xl" to="/">
            Home
          </Link>
          <div className="w-full h-px bg-white opacity-50 my-12"></div>
          <p className="text-2xl">{balance} ICP</p>
          <div className="w-full h-px bg-white opacity-50 my-12"></div>
        </div>
        <div className="flex flex-col gap-6 w-full   ">
          <button className="button  gap-2 dinos-score">
            <span className="relative top-0.5">{dinoScore}</span>{' '}
            <DinosTokenLogo />
          </button>
          <Link to="/settings">
            <button className="button settings">my settings</button>
          </Link>
          <Link to="/help">
            <button className="button px-6 py-4 leading-none bg-myBlack rounded-full">
              <span className="relative top-1"> need help ?</span>
            </button>
          </Link>
        </div>
        <div className="my-12">
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

export default HomeHeaderMenu;
