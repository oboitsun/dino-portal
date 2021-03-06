import React from 'react';
import SectionHeaderBackNav from '../../components/SectionHeaderBackNav';

export default function Minigames() {
  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <SectionHeaderBackNav pageName="Mini games" />
      <div className="w-full h-full flex flex-grow justify-center items-center">
        <p className=" text-3xl lg:text-9xl text-border text-white py-10">
          Coming Soon!
        </p>
      </div>
    </div>
  );
}
