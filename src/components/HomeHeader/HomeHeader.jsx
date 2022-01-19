import React, { useState } from 'react';
import './home-header.scss';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/uiReducer';
import { Link } from 'react-router-dom';
import DinosTokenLogo from '../DinosTokenLogo';
import HomeHeaderMenu from './HomeHeaderMenu';
import SettingsButton from './SettingsButton';
import DinosScoreButton from './DinosScoreButton';

export default function HomeHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const balance = 2.70195258;
  const dinoScore = 1035;
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setUser(null));
  };

  const LogOutButton = () => (
    <button onClick={logOut} className="disconnect-button btn-filled">
      <div className="w-1/2 wallet-id">xaj2u-2jdsadasd0dsad0sada0das</div>
      <div className="w-1/2 relative top-0.5">Disconnect</div>
    </button>
  );
  // const DinosAmountButton = () => (
  //   <button className="disconnect-button btn-filled gap-2 dinos-score">
  //     <span className="relative top-0.5">1035</span> <DinosTokenLogo />
  //   </button>
  // );
  // const SettingsButton = () => (
  //   <Link to="/settings">
  //     <button className="settings">my settings</button>
  //   </Link>
  // );

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <div className="home-header ">
      <Link
        className="w-full lg:max-w-[130px] xl:max-w-[164px] hidden lg:block"
        to="/"
      >
        <img
          className="w-full block"
          src="../../assets/logo.png"
          alt="Dino logo"
        />
      </Link>
      <div className="hidden lg:flex items-center gap-5">
        <img
          className="w-auto"
          src="../../assets/dfinity-logo.png"
          alt="Dfinity logo"
        />
        <div className="header-balance">{balance} ICP</div>
        <DinosScoreButton dinoScore={dinoScore} />
        <LogOutButton />
        <SettingsButton />
      </div>
      <div className="flex lg:hidden items-center w-full justify-between">
        <img
          onClick={handleShowMenu}
          className=""
          src="/assets/burger-icon.svg"
          alt="show menu"
        />
        <LogOutButton />
      </div>
      <HomeHeaderMenu
        balance={balance}
        dinoScore={dinoScore}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </div>
  );
}
