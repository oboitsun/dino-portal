import React from "react";
import { Link } from "react-router-dom";

export default function StoreButton() {
  return (
    <Link to="/store">
      <button className="w-full h-full store-button flex items-center justify-center group">
        <img
          className="h-5 lg:h-full group-hover:translate-x-full transition-all group-hover:pl-2"
          src="/assets/cart-icon.svg"
          alt="go to store"
        />
        <span className=" text-white   lg:text-2xl leading-none ml-4 relative top-0.5 group-hover:opacity-0 transition-all">
          Store
        </span>
      </button>
    </Link>
  );
}
