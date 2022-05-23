import React from "react";
import "./marketplace-card.scss";
import RarityButton from "./RarityButton";
export default function MarketplaceCard({ card }) {
  const rarityColors = {
    common: "#6FCD93",
    uncommon: "#61C8F7",
    rare: "#D88535",
    ultraRare: "#F0CB64",
  };
  return (
    <div className="MarketplaceCard w-full flex flex-col ">
      <div className="w-full relative">
        <div style={{ background: rarityColors[card.rarity] }} className="card-rarity">
          <span className="relative top-0.5"> {card.text}</span>
        </div>
        <img className="w-full card-pic" src={card.imgSrc} alt="nft-card" />
      </div>
      <div className="w-full flex items-center text-2xl py-1 justify-between px-1">
        <p className="text-border text-white text-xs lg:text-sm">{card.name}</p>
        <p className="text-yellow text-border text-xs lg:text-base">{card.price} ICP</p>
      </div>
      <a className="w-full block" href="/">
        <img className="w-full" src="assets/buy-now.svg" alt="buy now" />
      </a>
    </div>
  );
}
