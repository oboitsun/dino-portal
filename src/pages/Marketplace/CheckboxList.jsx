import React from "react";

export default function CheckboxList({ list, values, setStateFunc, multiselect = true }) {
  const handleItemClick = (value) => {
    if (values.includes(value) && multiselect) {
      setStateFunc([...values.filter((v) => v !== value)]);
      return;
    }
    setStateFunc([...values, value]);
  };
  return (
    <div className="flex flex-col gap-4">
      {list.map((item) => {
        const isChecked = values.includes(item.value);
        return (
          <div
            key={item.value}
            onClick={() => {
              handleItemClick(item.value);
            }}
            className="flex items-center gap-2"
          >
            <div
              className={`border-[3px] border-white rounded w-4 h-4 ${isChecked ? "bg-white" : ""}`}
            />
            <div className="">
              <span className="relative top-1">{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
