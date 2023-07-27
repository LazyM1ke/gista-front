import Icon from "../../Icon";
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
  const TextInputClassName = classNames("text-input", className);
  return (
    <div className={TextInputClassName}>
      {label && (
        <Typography className="text-input__label" variant="text-16">
          {label}
        </Typography>
      )}
      <input
        style={hintText ? { border: "1px solid #E32727" } : {}}
        placeholder={placeholder}
        type={type}
        {...(register ? register(name, options) : {})}
        formNoValidate
      />
      {hintText && (
        <div className="text-input__hint-text">
          <Icon size={16} iconName="infocircle" color="#E32727" />
          <Typography
            className="text-input__hint-text"
            variant="text-14"
            color="#E32727"
          >
            {hintText}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default TextInput;
