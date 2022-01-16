import NFTsGallery from "../../components/NFTsGallery";

export default function MyDinos({}) {
  const slides = [
    {
      name: "allosaurus",
      age: "10 days",
      pic: "assets/dinos/allosaurus.png",
    },
    {
      name: "anklyosaurus",
      age: "15 days",
      pic: "assets/dinos/anklyosaurus.png",
    },
    {
      name: "brachiosaurus",
      age: "20 days",
      pic: "assets/dinos/brachiosaurus.png",
    },
    {
      name: "brontosaurus",
      age: "5 days",
      pic: "assets/dinos/brontosaurus.png",
    },
    {
      name: "iguanodon",
      age: "10 days",
      pic: "assets/dinos/iguanodon.png",
    },
    {
      name: "parasaurolophus",
      age: "15 days",
      pic: "assets/dinos/parasaurolophus.png",
    },
    {
      name: "stegasaurus",
      age: "20 days",
      pic: "assets/dinos/stegasaurus.png",
    },
    {
      name: "trex",
      age: "5 days",
      pic: "assets/dinos/trex.png",
    },
    {
      name: "triceratops",
      age: "5 days",
      pic: "assets/dinos/triceratops.png",
    },
    {
      name: "velociraptor",
      age: "5 days",
      pic: "assets/dinos/velociraptor.png",
    },
  ];
  return (
    <div
      id="dinos-page"
      className="w-full h-full flex-grow flex flex-col justify-between "
    >
      <NFTsGallery slides={slides} />
    </div>
  );
}
