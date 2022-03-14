import React from 'react';
import SectionHeaderBackNav from '../../components/SectionHeaderBackNav';
import './leaderboard.scss';
const leaderboard = [
  {
    id: 1,
    userName: 'T-rex',
    common: 1,
    uncomm: 2,
    rare: 3,
    ultraRare: 2000,
  },
  {
    id: 2,
    userName: 'Dino #364',
    common: 1,
    uncomm: 2,
    rare: 3,
    ultraRare: 2000,
  },
  {
    id: 3,
    userName: 'Dino #1003',
    common: 1,
    uncomm: 2,
    rare: 3,
    ultraRare: 2000,
  },
  {
    id: 4,
    userName: 'Dino #276',
    common: 1,
    uncomm: 2,
    rare: 3,
    ultraRare: 2000,
  },
  {
    id: 5,
    userName: 'Dino #749',
    common: 1,
    uncomm: 2,
    rare: 3,
    ultraRare: 2000,
  },
  {
    id: 6,
    userName: 'Dino #33',
    common: 1,
    uncomm: 2,
    rare: 3,
    ultraRare: 2000,
  },
];
export default function Leaderboard() {
  const userId = 4;
  return (
    <div className="w-full">
      <div className="grid-cols-1 grid gap-10 ">
        <div className="w-full h-auto relative lg:pb-6 col-span-2 lg:col-span-1">
          <SectionHeaderBackNav pageName="leaderboard" />
          <div className="hidden lg:block absolute bottom-0 left-0 w-full h-1 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-1 w-full pt-10 gap-5 ">
        <div className="bg-yellow rounded-xl h-20 grid-custom place-items-center">
          <p className="justify-self-start col-span-2">rank</p>
          <p className="">common</p>
          <p className="">uncommon</p>
          <p className="">rare</p>
          <p className="">ultra rare</p>
        </div>
        {leaderboard.map((user, i) => (
          <div
            className={`place ${
              userId === user.id ? 'user' : 'other'
            } grid-custom`}
          >
            <div className=" w-full h-full relative">
              {i < 3 && (
                <img
                  className="abs-centering"
                  src="assets/star.svg"
                  alt="star"
                />
              )}
              <span className="abs-centering z-10 pt-1">{i + 1}.</span>
            </div>
            <p className="justify-self-start"> T-Rex</p>
            <p>4.15</p>
            <p>4.15</p>
            <p>4.15</p>
            <p>4.15</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 w-full pt-10 gap-5 ">
        <div className="bg-yellow rounded-xl h-20 grid-custom place-items-center">
          <p className="justify-self-start col-span-2">rank</p>
          <p className="">Score</p>
        </div>
        {leaderboard.map((user, i) => (
          <div
            className={`place ${
              userId === user.id ? 'user' : 'other'
            } grid-custom`}
          >
            <div className=" w-full h-full relative">
              {i < 3 && (
                <img
                  className="abs-centering"
                  src="assets/star.svg"
                  alt="star"
                />
              )}
              <span className="abs-centering z-10 pt-1">{i + 1}.</span>
            </div>
            <p className="justify-self-start"> sergey</p>
            <p>4.15</p>
          </div>
        ))}
      </div>
    </div>
  );
}
