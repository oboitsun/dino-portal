import { useState } from 'react';
import ModalAbout from '../../components/ModalAbout/ModalAbout';
import NFTsGallery from '../../components/NFTsGallery';
import SectionHeaderBackNav from '../../components/SectionHeaderBackNav';
import StoreButton from '../../components/StoreButton';
import { dinos } from '../../db';
import './my-dinos.scss';

export default function MyDinos({}) {
  const [currentDino, setCurrentDino] = useState(dinos[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      id="my-dinos"
      className="w-full h-full flex-grow flex flex-col justify-between "
    >
      <div className="nft-gallery-page">
        <div className="grid grid-cols-2 gap-y-5 gap-x-10 auto-rows-max h-full flex-grow">
          <div className="back-section w-full h-auto relative">
            <SectionHeaderBackNav pageName="My Dinos" />
            <div className="hidden lg:block absolute bottom-0 left-0 w-full h-1 rounded-full bg-white"></div>
          </div>
          <div className="store-link">
            <StoreButton />
          </div>
          <NFTsGallery
            setShowModal={setShowModal}
            setCurrentNft={setCurrentDino}
            isEgg={false}
            slides={dinos}
          />
        </div>
      </div>
      <ModalAbout show={showModal} setShow={setShowModal} slide={currentDino} />
    </div>
  );
}
