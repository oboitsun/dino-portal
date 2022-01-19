import NFTsGallery from '../../components/NFTsGallery';
import SectionHeaderBackNav from '../../components/SectionHeaderBackNav';
import StoreButton from '../../components/StoreButton';
import './my-dinos.scss';
export default function MyDinos({}) {
  const slides = [
    {
      name: 'allosaurus',
      age: '10 days',
      pic: 'assets/dinos/allosaurus.png',
    },
    {
      name: 'anklyosaurus',
      age: '15 days',
      pic: 'assets/dinos/anklyosaurus.png',
    },
    {
      name: 'brachiosaurus',
      age: '20 days',
      pic: 'assets/dinos/brachiosaurus.png',
    },
    {
      name: 'brontosaurus',
      age: '5 days',
      pic: 'assets/dinos/brontosaurus.png',
    },
    {
      name: 'iguanodon',
      age: '10 days',
      pic: 'assets/dinos/iguanodon.png',
    },
    {
      name: 'parasaurolophus',
      age: '15 days',
      pic: 'assets/dinos/parasaurolophus.png',
    },
    {
      name: 'stegasaurus',
      age: '20 days',
      pic: 'assets/dinos/stegasaurus.png',
    },
    {
      name: 'trex',
      age: '5 days',
      pic: 'assets/dinos/trex.png',
    },
    {
      name: 'triceratops',
      age: '5 days',
      pic: 'assets/dinos/triceratops.png',
    },
    {
      name: 'velociraptor',
      age: '5 days',
      pic: 'assets/dinos/velociraptor.png',
    },
  ];
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
          <NFTsGallery isEgg={false} slides={slides} />
        </div>
      </div>
    </div>
  );
}
