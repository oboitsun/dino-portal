export const backs = [
  "assets/slider1-bg.png",
  "assets/slider1-bg2.jpg",
  "assets/slider1-bg3.png",
];

export const randomBgIndex = (backs) => {
  if (!backs?.length) return backs;
  return Math.floor(Math.random() * backs.length);
};
