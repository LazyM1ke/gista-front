import "./NumberInput.scss";
import NumberInputProps from "./NumberInputProps.types";
import classNames from "classnames";
import React from "react";

const NumberInput = ({
  className,
  value,
  onChange,
  required,
  disabled,
  min,
  max,
}: NumberInputProps) => {
  const NumberInputClassName = classNames("number-input", className);

  return (
    <input
      type="number"
      onChange={onChange}
      required={required}
      disabled={disabled}
      value={value}
      max={max}
      min={min}
      className={NumberInputClassName}
    />
  );
};

export default NumberInput;
