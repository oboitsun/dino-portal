import React from "react";
import ExpandableBlock from "../../components/ExpandableBlock";
import CheckboxList from "./CheckboxList";
export default function BackFilter({ expanded, handleExpand, backs, setBacks }) {
  const list = [
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "red", label: "Red" },
  ];
  return (
    <div className="BackgroundFilter w-full dashboard-button">
      <ExpandableBlock
        name={"back"}
        expanded={expanded}
        label="Background"
        handleExpand={handleExpand}
      >
        <CheckboxList list={list} values={backs} setStateFunc={setBacks} />
      </ExpandableBlock>
    </div>
  );
}
