import React from "react";

export default function Banner() {
  return (
    <div className="dashboard-banner col-span-2 grid grid-cols-2 gap-6 max-h-[226px]">
      <img
        className="w-full h-auto block"
        src="assets/eggs-banner.png"
        alt="eggs banner"
      />
      <div className="w-full relative top-2 leading-[0.8] uppercase flex flex-col justify-center text-white">
        <p className="text-[76px] relative top-2">EGGS </p>
        <p className="text-[29px] mb-2 leading-none">hatching q2 </p>
        <p className="text-[80px]  text-yellow">2022</p>
      </div>
    </div>
  );
}
