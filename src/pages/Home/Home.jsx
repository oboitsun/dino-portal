import { useState } from "react";
import "./home-page.scss";
import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import LoginFooter from "../../components/LoginFooter";
import { motion } from "framer-motion";
import { backs } from "./backs";
export default function Home() {
  const currentBG = backs[Math.floor(Math.random() * backs.length)];
  return (
    <div
      key="home"
      id="home"
      className="flex flex-col items-center justify-between w-full overflow-hidden relative"
    >
      <div className="w-screen h-screen fixed top-0 left-0">
        <img className="w-full h-full  object-cover" src={currentBG} alt="bg" />
        <div className="absolute bottom-0 w-full h-32 z-[2] bg-gradient-to-t from-turf to-transparent"></div>
      </div>
      <div className="my-container h-full flex-grow flex flex-col w-full relative z-10 cont">
        <HomeHeader />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full  mb-auto flex flex-col py-10 "
        >
          <Outlet />
        </motion.div>
      </div>
      <div className="relative z-[5]">
        <LoginFooter />
      </div>
    </div>
  );
}
