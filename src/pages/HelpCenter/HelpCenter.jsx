import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import FAQ from '../../components/FAQ/FAQ';
import SectionHeaderBackNav from '../../components/SectionHeaderBackNav';

export default function HelpCenter() {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full flex flex-col gap-5 lg:gap-10">
        <div className="w-full  pb-6 relative">
          <SectionHeaderBackNav pageName="help center" />
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-white"></div>
        </div>
        <div className="w-full ">
          <FAQ />
        </div>
      </div>
      <div className="w-full flex flex-col  gap-5 lg:gap-10">
        <div className="w-full relative pb-6">
          <p className="text-white text-[32px] tex-border">Contact Us</p>
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-white"></div>
        </div>

        <ContactUs />
      </div>
    </div>
  );
}
