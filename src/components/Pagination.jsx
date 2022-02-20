import React from 'react';

export default function Pagination({
  total,
  perPage,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];
  for (let j = 1; j <= Math.ceil(total / perPage); j++) {
    pageNumbers.push(j);
  }
  return (
    <div className="flex items-center gap-3 justify-center w-full">
      {pageNumbers.map((p, i) => (
        <button
          onClick={() => {
            setCurrentPage(p);
          }}
          key={i}
          className={`w-10 h-10  rounded-xl text-white flex items-center justify-center border-2 ${
            p === currentPage
              ? 'bg-yellow border-white'
              : 'bg-gray-400 border-black'
          }`}
        >
          <span className="relative top-0.5"> {p}</span>
        </button>
      ))}
    </div>
  );
}
