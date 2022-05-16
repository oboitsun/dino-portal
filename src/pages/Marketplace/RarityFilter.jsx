import React from "react";
import ExpandableBlock from "../../components/ExpandableBlock";
import CheckboxList from "./CheckboxList";

export default function RarityFilter({ expanded, handleExpand, rarity, setRarrity }) {
  const rarities = [
    { value: "all", label: "All" },
    { value: "common", label: "Common" },
    { value: "uncommon", label: "Uncommon" },
    { value: "rare", label: "Rare" },
    { value: "ultraRare", label: "Ultra Rare" },
  ];
  return (
    <div className="RarityFilter w-full dashboard-button">
      <ExpandableBlock
        name={"rarity"}
        expanded={expanded}
        label="Rarity"
        handleExpand={handleExpand}
      >
        <CheckboxList list={rarities} values={rarity} setStateFunc={setRarrity} />
      </ExpandableBlock>
    </div>
  );
}
