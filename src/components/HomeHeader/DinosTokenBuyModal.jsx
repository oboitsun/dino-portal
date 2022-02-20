import { useState } from 'react';
import DinosTokenBuyStatus from './DinosTokenBuyStatus';
import NumberFormat from 'react-number-format';
function DinosTokenBuyModal({ showTokenModal, handleToggleTokenModal }) {
  const [showStatus, setShowStatus] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [coins, setCoins] = useState('');
  const multiplicator = 10000;

  const handleBuyNowClick = async () => {
    setIsSuccess(Math.random() >= 0.5);
    setShowStatus(true);
  };
  const handleCloseModal = () => {
    handleToggleTokenModal();
    setCoins('');
    setIsSuccess(false);
    setShowStatus(false);
  };

  return (
    <div
      onClick={handleToggleTokenModal}
      className={`${
        showTokenModal ? 'opacity-100 z-50' : 'pointer-events-none opacity-0'
      } fixed top-0 left-0 h-screen w-screen bg-black/50 flex items-center justify-center p-10`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-turf w-full max-w-[524px] rounded-[20px] p-10"
      >
        {!showStatus ? (
          <>
            <div className="flex justify-between items-center pb-10">
              <p className="text-3xl text-border top-1 relative">
                buy <span className="text-yellow">DINOS TOKEN</span>
              </p>
              <button onClick={handleToggleTokenModal}>
                <img
                  className=""
                  src="/assets/close-icon.svg"
                  alt="close modal"
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="mr-6 text-2xl leading-none relative top-0.5">
                Quantity:
              </span>
              <div className="p-5 rounded-[20px] border-[3px] border-white flex items-center">
                <NumberFormat
                  className="bg-transparent appearance-none  relative top-0.5 placeholder-white/50 max-w-[184px] focus:outline-none"
                  thousandSeparator={true}
                  placeholder="write quantity"
                  value={coins}
                  isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue >= 0;
                  }}
                  onValueChange={(e) => {
                    setCoins(e.floatValue);
                  }}
                />
                {/* <input
                  value={coins}
                  onChange={(e) => {
                    setCoins(e.target.value);
                  }}
                  type="number"
                  min={0}
                  placeholder="write quantity"
                /> */}
                <img
                  className="ml-9"
                  src="/assets/dino-coin.svg"
                  alt="dino-coin"
                />
              </div>
            </div>
            <div className="h-1 w-full bg-white my-6 rounded-full"></div>
            <div className="">
              <span className="mr-6 text-2xl leading-none relative top-0.5">
                Total:
              </span>
              <span className="mr-6 text-2xl leading-none relative top-0.5 text-white/50">
                {coins / multiplicator} ICP
              </span>
            </div>
            <button
              disabled={coins <= 0}
              onClick={handleBuyNowClick}
              className="rounded-full bg-yellow disabled:bg-myBlack disabled:text-white/50 transition-all w-full p-5 mt-6"
            >
              <span className="relative top-1 text-2xl leading-none">
                Buy now
              </span>
            </button>
          </>
        ) : (
          <DinosTokenBuyStatus
            dinos={coins / multiplicator}
            isSuccess={isSuccess}
            handleClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default DinosTokenBuyModal;
