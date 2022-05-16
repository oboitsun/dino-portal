import React from "react";
import ExpandableBlock from "../../components/ExpandableBlock";
export default function PriceFilter({ price, setPrice, expanded, handleExpand }) {
  return (
    <div className="PriceFilter w-full dashboard-button">
      <ExpandableBlock name={"price"} label="Price" expanded={expanded} handleExpand={handleExpand}>
        <div className="w-full grid grid-cols-[1fr,max-content,1fr]">
          <input
            placeholder="min"
            className="price-input"
            type="number"
            value={price.min}
            onChange={(e) => {
              setPrice({ ...price, min: e.target.value });
            }}
          />
          <span className="px-2.5 self-center">to</span>
          <input
            placeholder="max"
            className="price-input"
            type="number"
            value={price.max}
            onChange={(e) => {
              setPrice({ ...price, max: e.target.value });
            }}
          />
        </div>
      </ExpandableBlock>
    </div>
  );
}
