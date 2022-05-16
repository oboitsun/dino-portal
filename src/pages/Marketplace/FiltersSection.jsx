import React, { useState } from "react";
import AgeFilter from "./AgeFilter";
import BackFilter from "./BackFilter";
import ItemsFilter from "./ItemsFilter";
import PriceFilter from "./PriceFilter";
import RarityFilter from "./RarityFilter";

export default function FiltersSection({
  price,
  setPrice,
  backs,
  setBacks,
  age,
  setAge,
  rarity,
  setRarity,
  items,
  setItems,
}) {
  const [expanded, setExpanded] = useState("price");
  const handleExpand = (e) => {
    const itemName = e;
    if (expanded !== itemName) {
      setExpanded(itemName);
    } else {
      setExpanded("");
    }
  };
  return (
    <div className="w-[280px] flex-shrink-0 flex flex-col gap-5">
      <PriceFilter
        price={price}
        setPrice={setPrice}
        expanded={expanded}
        handleExpand={handleExpand}
      />
      <BackFilter
        expanded={expanded}
        handleExpand={handleExpand}
        backs={backs}
        setBacks={setBacks}
      />
      <AgeFilter expanded={expanded} handleExpand={handleExpand} age={age} setAge={setAge} />
      <RarityFilter
        expanded={expanded}
        handleExpand={handleExpand}
        rarity={rarity}
        setRarity={setRarity}
      />
      <ItemsFilter
        expanded={expanded}
        handleExpand={handleExpand}
        items={items}
        setItems={setItems}
      />
      <button className="ApplyFilters ">apply filters</button>
    </div>
  );
}
