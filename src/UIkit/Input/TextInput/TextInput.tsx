import Typography from "../../Typography";
import "./TextInput.scss";
import TextInputProps from "./TextInputProps.types";
import classNames from "classnames";
import React from "react";

const TextInput = ({
  className,
  placeholder,
  label,
  hintText,
  type = "text",
  register,
  name = "",
  options,
}: TextInputProps) => {
  const TextInputClassName = classNames(
    "text-input",

    className
  );
  return (
    <div className={TextInputClassName}>
      {label && (
        <Typography className="text-input__label" variant="text-16">
          {label}
        </Typography>
      )}
      <input
        placeholder={placeholder}
        type={type}
        {...(register ? register(name, options) : {})}
      />
      {hintText && (
        <Typography
          className="text-input__hint-text"
          variant="text-14"
          color="#E32727"
        >
          {hintText}
        </Typography>
      )}
    </div>
  );
};

export default TextInput;
