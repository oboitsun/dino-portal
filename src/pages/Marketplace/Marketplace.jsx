import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";
import MarketplaceCard from "../../components/MarketplaceCard";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import { cards } from "./db";
import Pagination from "../../components/Pagination";
import PriceFilter from "./PriceFilter";
import "./marketplace.scss";
import FiltersSection from "./FiltersSection";
const sortBy = [
  {
    value: "low",
    label: "low to high",
  },
  {
    value: "high",
    label: "high to low",
  },
];
const showItems = [
  {
    value: 16,
    label: "16",
  },
  { value: 32, label: "32" },
];

export default function Marketplace() {
  const [price, setPrice] = useState({ min: null, max: null });
  const [backs, setBacks] = useState([]);
  const [perPage, setPerPage] = useState(16);
  const [sort, setSort] = useState("low");
  const [rarity, setRarity] = useState([]);
  const [age, setAge] = useState([]);
  const [items, setItems] = useState([]);
  const sortedFiltered = cards;
  const [page, setPage] = useState(1);

  const paginated = sortedFiltered.slice(page * perPage - perPage, page * perPage);
  return (
    <div className="w-full h-full flex flex-col flex-grow ">
      <div className="w-full ">
        <div className="w-full flex justify-between items-center pb-6 relative">
          <div className="w-full lg:w-1/2">
            <SectionHeaderBackNav pageName="Marketplace" />
          </div>
          <div className=" hidden lg:flex w-full h-full items-center gap-5 justify-end  flex-grow">
            <div className="max-w-max">
              <Dropdown
                setStateFunc={setPerPage}
                value={showItems[showItems.findIndex((el) => el.value === perPage)]}
                options={showItems}
                heading={"Show items"}
              />
            </div>
            <div className="max-w-max">
              <Dropdown
                setStateFunc={setSort}
                value={sortBy[sortBy.findIndex((el) => el.value === sort)]}
                options={sortBy}
                heading={"Price"}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-[#8A7C4E]"></div>
        </div>

        <div className="w-full flex gap-5 pt-10">
          <FiltersSection
            price={price}
            setPrice={setPrice}
            backs={backs}
            setBacks={setBacks}
            age={age}
            setAge={setAge}
            rarity={rarity}
            setRarity={setRarity}
            items={items}
            setItems={setItems}
          />

          {paginated.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 ">
              {paginated.map((card, i) => (
                <MarketplaceCard key={i} card={card} />
              ))}
            </div>
          ) : (
            <div className="py-10 flex flex-col items-center">
              <p className="text-white text-4xl text-center py-10">
                Sorry no NFTs matching your filter options :(
              </p>
              <button
                onClick={() => {
                  setType("all");
                  setRarity("all");
                }}
                className="text-yellow text-2xl"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        <div className="flex pt-5">
          <Pagination
            perPage={perPage}
            total={cards.length}
            currentPage={page}
            setCurrentPage={setPage}
          />
        </div>
      </div>{" "}
    </div>
  );
}
