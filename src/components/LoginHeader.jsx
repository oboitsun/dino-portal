import React from "react";
import Socials from "./Socials";
const links = [
  { text: "home", href: "https://dinos-five.vercel.app" },
  { text: "about", href: "https://dinos-five.vercel.app#about-us" },
  { text: "team", href: "https://dinos-five.vercel.app#team" },
  { text: "roadmap", href: "https://dinos-five.vercel.app#roadmap" },
  // { text: "market", href: "https://dinos-five.vercel.app" },
];
export default function LoginHeader() {
  return (
    <div className="max-w-[1080px] mx-auto flex items-center justify-between">
      <div className="flex gap-10">
        {links.map((link) => (
          <a key={link.text} className="text-white uppercase text-xl" href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
      <Socials />
    </div>
  );
}
