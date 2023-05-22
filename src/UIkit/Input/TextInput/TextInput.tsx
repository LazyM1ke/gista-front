import Typography from "../../Typography";
import "./TextInput.scss";
import TextInputProps from "./TextInputProps.types";
import classNames from "classnames";
import React, { ChangeEvent, useCallback } from "react";

const TextInput = ({
  className,
  value,
  setValue,
  placeholder,
  label,
  hintText,
  type = "text",
}: TextInputProps) => {
  const TextInputClassName = classNames(
    "text-input",

    className
  );
  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (setValue) {
        setValue(event.target.value);
      }
    },
    [setValue]
  );
  return (
    <div className={TextInputClassName}>
      {label && (
        <Typography className="text-input__label" variant="text-16">
          {label}
        </Typography>
      )}
      <input
        onChange={onChangeHandler}
        placeholder={placeholder}
        value={value}
        type={type}
      />
      {hintText && (
        <Typography
          className="text-input__hint-text"
          variant="text-14"
          color="#787878"
        >
          {hintText}
        </Typography>
      )}
    </div>
  );
};

export default TextInput;
