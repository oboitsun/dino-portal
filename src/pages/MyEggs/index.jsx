import NFTsGallery from '../../components/NFTsGallery';
import SectionHeaderBackNav from '../../components/SectionHeaderBackNav';
import StoreButton from '../../components/StoreButton';
import './my-eggs.scss';

const slides = [
  {
    name: 'Delicate egg',
    age: '10 days',
    pic: '../../assets/eggs/1.png',
    isReadyToHatch: false,
    back: '/assets/slider1-bg.jpg',
  },
  {
    name: 'Delicate egg',
    age: '15 days',
    pic: '../../assets/eggs/2.png',
    isReadyToHatch: false,
    back: '/assets/slider1-bg2.jpg',
  },
  {
    name: 'Delicate egg',
    age: '20 days',
    pic: '../../assets/eggs/3.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/4.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg3.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/5.png',
    isReadyToHatch: false,
    back: '/assets/slider1-bg.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/6.png',
    isReadyToHatch: false,
    back: '/assets/slider1-bg3.jpg',
  },
  {
    name: 'Delicate egg',
    age: '20 days',
    pic: '../../assets/eggs/7.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg2.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/8.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/9.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg3.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/10.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg3.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/11.png',
    isReadyToHatch: false,
    back: '/assets/slider1-bg2.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/12.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/6.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg2.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/4.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg3.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/5.png',
    isReadyToHatch: false,
    back: '/assets/slider1-bg2.jpg',
  },
  {
    name: 'Delicate egg',
    age: '5 days',
    pic: '../../assets/eggs/9.png',
    isReadyToHatch: true,
    back: '/assets/slider1-bg.jpg',
  },
];
export default function MyEggs({}) {
  return (
    <div
      id="my-eggs"
      className="w-full h-full flex-grow flex flex-col justify-between "
    >
      <div className="nft-gallery-page">
        <div className="grid grid-cols-2 gap-y-5 gap-x-10 auto-rows-max h-full flex-grow">
          <div className="back-section w-full h-auto relative">
            <SectionHeaderBackNav pageName="My Eggs" />
            <div className="hidden lg:block absolute bottom-0 left-0 w-full h-1 rounded-full bg-white"></div>
          </div>
          <div className="store-link">
            <StoreButton />
          </div>
          <NFTsGallery isEgg={true} slides={slides} />
        </div>
      </div>
    </div>
  );
}
