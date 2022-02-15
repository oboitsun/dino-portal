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
      name: 'ankylosaurus',
      age: '15 days',
      pic: 'assets/dinos/ankylosaurus.png',
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
      name: 'stegosaurus',
      age: '20 days',
      pic: 'assets/dinos/stegosaurus.png',
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
      name: 'veloceraptor',
      age: '5 days',
      pic: 'assets/dinos/veloceraptor.png',
    },

    {
      name: 'ankylosaurus',
      age: '1 days',
      pic: 'assets/dinos/ankylosaurus_baby.png',
    },
    {
      name: 'brachiosaurus',
      age: '1 days',
      pic: 'assets/dinos/brachiosaurus_baby.png',
    },
    {
      name: 'brontosaurus',
      age: '1 days',
      pic: 'assets/dinos/brontosaurus_baby.png',
    },

    {
      name: 'parasaurolophus',
      age: '1 days',
      pic: 'assets/dinos/parasaurolophus_baby.png',
    },
    {
      name: 'pterodactyl',
      age: '1 days',
      pic: 'assets/dinos/pterodactyl_baby.png',
    },
    {
      name: 'stegosaurus',
      age: '1 days',
      pic: 'assets/dinos/stegosaurus_baby.png',
    },
    {
      name: 'trex',
      age: '1 days',
      pic: 'assets/dinos/trex_baby.png',
    },
    {
      name: 'triceratops',
      age: '1 days',
      pic: 'assets/dinos/triceratops_baby.png',
    },
    {
      name: 'veloceraptor',
      age: '1 days',
      pic: 'assets/dinos/veloceraptor_baby.png',
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
