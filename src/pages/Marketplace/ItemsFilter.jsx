import React from "react";
import ExpandableBlock from "../../components/ExpandableBlock";
import CheckboxList from "./CheckboxList";

export default function ItemsFilter({ expanded, handleExpand, items, setItems }) {
  const list = [
    { value: "dino1", label: "dino (gen 1)" },
    { value: "dino2", label: "dino (gen 2)" },
    { value: "egg1", label: "eggs (gen 1)" },
    { value: "egg2", label: "eggs (gen 2)" },
    { value: "dino_items", label: "dino items" },
  ];
  return (
    <div className="ItemsFilter w-full dashboard-button">
      <ExpandableBlock name={"items"} expanded={expanded} label="Items" handleExpand={handleExpand}>
        <CheckboxList list={list} values={items} setStateFunc={setItems} />
      </ExpandableBlock>
    </div>
  );
}
