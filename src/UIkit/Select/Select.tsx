import "./Select.scss";
import SelectProps from "./SelectProps.types";
import classNames from "classnames";
import React, { useState } from "react";

const CustomSelect = ({ name, id, data, className }: SelectProps) => {
  const [selectValue, setSelectValue] = useState<string>("");

  const selectClassName = classNames("select", className);
  return (
    <select
      className={selectClassName}
      name={name}
      id={id}
      onChange={(e) => setSelectValue(e.target.value)}
    >
      <option value="" hidden>
        Основной раздел
      </option>
      {data.map((item) => (
        <option
          className="select__option"
          key={item.id}
          id={item.id}
          value={item.value}
        >
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
