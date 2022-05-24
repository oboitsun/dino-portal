import { useState, useEffect } from "react";
import ThumbsSlide from "../../components/ThumbsSlide/";
import "./nft-gallery.scss";
import GallerySlide from "./GallerySlide";
import { backs, randomBgIndex } from "../../utils";
import Pagination from "../Pagination";

export default function NFTsGallery({
  setShowModal,
  setCurrentNft,
  slides,
  isEgg = false,
  showMoreInfo = true,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImgBG, setCurrentImageBG] = useState("assets/slider1-bg.png");
  const [page, setPage] = useState(1);
  const perPage = 10;
  const paginated = slides.slice(page * perPage - perPage, page * perPage);
  useEffect(() => {
    setCurrentImageBG(backs[randomBgIndex(backs)]);
  }, []);
  const handleCurrentSlide = (i) => {
    setCurrentSlide(i);
    setCurrentNft(paginated[i]);
  };
  const handleNextPage = (i) => {
    setPage(i);
    setCurrentSlide(0);
    setCurrentNft(paginated[0]);
  };
  return (
    <>
      <div className="w-full  flex-grow  gallery auto-rows-min grid col-span-2 lg:col-span-1  grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-4">
        {paginated.map((slide, i) => (
          <ThumbsSlide
            isEgg={isEgg}
            bgSrc={slide?.back || currentImgBG}
            onClick={() => {
              handleCurrentSlide(i);
            }}
            key={i}
            slide={slide}
            active={i === currentSlide}
          />
        ))}
      </div>
      <div className="picture  relative  overflow-hidden col-span-2 lg:col-span-1 lg:col-start-2 row-start-3 lg:row-start-2">
        <GallerySlide
          isEgg={isEgg}
          bgSrc={paginated[currentSlide]?.back}
          slide={paginated[currentSlide]}
          bg
        />
      </div>
      <Pagination
        total={slides.length}
        perPage={perPage}
        page={page}
        setCurrentPage={handleNextPage}
      />
      {showMoreInfo && (
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="h-10 w-full rounded-xl border-[3px] border-black bg-yellow"
        >
          <span className="relative top-0.5 text-white block hover:scale-105 transform transition-all">
            More info {paginated[currentSlide]?.name}
          </span>
        </button>
      )}
    </>
  );
}
