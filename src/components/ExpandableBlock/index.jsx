import React, { useState, useRef, useEffect } from "react";

export default function index({ expanded, name, label, handleExpand, children }) {
  const [height, setHeight] = useState(0);
  const box = useRef(null);
  const padding = 12;
  useEffect(() => {
    const scrollHeight = box && box.current.scrollHeight;
    if (box && expanded === name) {
      setHeight(scrollHeight + padding);
    } else {
      setHeight(0);
    }
  }, [expanded]);
  return (
    <div
      className="w-full flex flex-col"
      value={name}
      onClick={() => {
        handleExpand(name);
      }}
    >
      <div className="cursor-pointer flex items-center justify-between">
        <span className="relative top-1">{label}</span>
        <img
          className={`w-4 transition-all ${expanded === name ? "rotate-180" : ""}`}
          src="assets/expand-arrow.svg"
          alt="expand filter"
        />
      </div>

      <div
        ref={box}
        style={{ maxHeight: height, paddingTop: height > 0 ? 0 : 0 }}
        className={`transition-all overflow-hidden`}
      >
        <div className="w-full opacity-30 bg-black h-1 flex-shrink-0 rounded-full my-2.5"></div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=""
        >
          {children}
        </div>
      </div>
    </div>
  );
}
