import React from 'react';
import { Link } from 'react-router-dom';

export default function SectionHeaderBackNav({ pageName = '' }) {
  return (
    <div className="w-full flex items-center">
      <Link to="/">
        <img
          className="h-8 lg:h-full w-auto"
          src="/assets/header-back-button.svg"
          alt="back to home"
        />
      </Link>
      <p className="text-border text-xl lg:text-3xl text-white ml-6">
        {pageName}
      </p>
    </div>
  );
}
