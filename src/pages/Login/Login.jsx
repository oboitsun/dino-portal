import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/uiReducer";
import { useNavigate, useLocation } from "react-router-dom";
import "./login-page.scss";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import Modal from "../../components/Modal";
import LoginMenuModal from "../../components/LoginHeader/LoginMenuModal";
import { backs } from "../Home/backs";
export default function Login(props) {
  const currentBG = backs[Math.floor(Math.random() * backs.length)];
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  let state = location.state;
  let from = state ? state.from.pathname : "/";
  const handleLogin = () => {
    dispatch(setUser(true));
    navigate(from, { replace: true });
  };
  const wallets = [
    { name: "stoic", onClick: handleLogin },
    { name: "plug", onClick: handleLogin },
    { name: "earth", onClick: handleLogin },
  ];

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <div id="login-page" className="w-full min-h-screen overflow-hidden relative   ">
      <div className="w-full h-full absolute top-0 left-0">
        <img className="w-full h-full object-cover" src={currentBG} alt="bg" />
        <div className="absolute bottom-0 w-full h-32 z-[2] bg-gradient-to-t from-turf to-transparent"></div>
      </div>
      <div className="cont flex flex-col justify-between items-center">
        <div className="   w-full left-0 z-[2]">
          <LoginHeader showMenu={showMenu} handleShowMenu={handleShowMenu} />
        </div>

        <div className="login-window my-auto">
          <img className="logo w-full" src="../assets/logo.png" alt="logo" />
          <p className="heading text-border text-center">Connect using your wallet below</p>
          <div className="grid gap-6 w-full">
            {wallets.map((wallet, i) => (
              <button key={i} className={`wallet ${wallet.name}`} onClick={wallet.onClick}>
                <span className="relative top-1.5">connect {wallet.name} wallet</span>
              </button>
            ))}
          </div>
        </div>
        <div className=" w-full left-0 z-[2]">
          <LoginFooter
            onClick={() => {
              setShowModal(true);
            }}
            login
          />
        </div>
      </div>
      <LoginMenuModal showMenu={showMenu} setShowMenu={setShowMenu} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
