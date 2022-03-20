import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginFooter({ login = false, ...props }) {
  const currentYear = new Date();
  return (
    <div className="flex items-center justify-center mx-auto gap-10 uppercase text-white text-xl pt-6 pb-10">
      <img
        className="w-auto hidden lg:block"
        src="../../assets/dfinity-logo.png"
        alt="dfinity logo"
      />

      {!login ? (
        <Link style={{ display: 'none' }} to="/help">
          <button className="px-6 py-4 leading-none bg-myBlack rounded-full">
            <span className="relative top-1"> need help ?</span>
          </button>
        </Link>
      ) : (
        <button
          {...props}
          className="px-6 py-4 leading-none bg-myBlack rounded-full"
        >
          <span className="relative lg:top-1 text-xs lg:text-base">
            need help ?
          </span>
        </button>
      )}
      <p className="relative top-0.5">IC Dinos {currentYear.getFullYear()}</p>
    </div>
  );
}
