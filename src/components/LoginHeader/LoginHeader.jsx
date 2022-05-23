import React from "react";
import Socials from "../Socials";
import { links } from "../../db";
export default function LoginHeader({ handleShowMenu }) {
  return (
    <div className="w-full flex items-center justify-between py-11">
      <div className="lg:hidden block gap-10">
        <img onClick={handleShowMenu} className="" src="/assets/burger-icon.svg" alt="show menu" />
      </div>
      <div className="hidden lg:flex gap-10">
        {links.map((link) => (
          <a
            key={link.text}
            className="text-white uppercase text-lg lg:text-xl text-shadow relative left-0 hover:-left-1  transition-all"
            href={link.href}
          >
            {link.text}
          </a>
        ))}
      </div>
      <Socials />
    </div>
  );
}
