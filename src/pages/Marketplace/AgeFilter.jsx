import React from "react";
import ExpandableBlock from "../../components/ExpandableBlock";
import CheckboxList from "./CheckboxList";
export default function AgeFilter({ expanded, handleExpand, age, setAge }) {
  const list = [
    { value: "baby", label: "baby" },
    { value: "teen", label: "teen" },
    { value: "adult", label: "adult" },
  ];
  return (
    <div className="AgeFilter w-full dashboard-button">
      <ExpandableBlock name={"age"} expanded={expanded} label="Age" handleExpand={handleExpand}>
        <CheckboxList list={list} values={age} setStateFunc={setAge} />
      </ExpandableBlock>
    </div>
  );
}
