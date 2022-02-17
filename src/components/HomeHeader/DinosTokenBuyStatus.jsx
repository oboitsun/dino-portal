import React from 'react';

function DinosTokenBuyStatus({ dinos, isSuccess, handleClose }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40">
        {isSuccess ? (
          <img className="w-full" src="/assets/dino-coin.svg" alt="dino-coin" />
        ) : (
          <img
            className="w-full"
            src="/assets/caution.svg"
            alt="Something went wrong"
          />
        )}
      </div>
      <p className="text-border text-4xl text-white mt-6 mb-3">
        {isSuccess ? 'Success' : 'Error'}
      </p>
      {isSuccess ? (
        <p className="text-2xl text-center">
          you have added <span className="text-yellow">{dinos}</span> dinos
        </p>
      ) : (
        <p className="text-2xl text-center">
          Something went wrong, please try again!
        </p>
      )}
      <button
        onClick={handleClose}
        className="rounded-full bg-myBlack w-full p-5 mt-6"
      >
        <span className="relative top-1 text-2xl leading-none">Goit it!</span>
      </button>
    </div>
  );
}

export default DinosTokenBuyStatus;
