import { Link } from 'react-router-dom';
import HomeSlider from '../HomeSlider';
import Navigation from './Navigation';
import './home-dashboard.scss';
export default function HomeDashboard() {
  return (
    <div className="home-dashboard">
      <div className="w-full ">
        <Navigation />
      </div>
      <div className="hidden lg:block w-full  relative overflow-hidden h-full max-h-[670px]">
        <HomeSlider />
      </div>
    </div>
  );
}
