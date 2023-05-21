import Typography from "../Typography";
import "./Button.scss";
import ButtonProps from "./ButtonProps.types";
import classnames from "classnames";
import React from "react";

function Button({
  className,
  children = "Кпопочка",

  type = "primary",
  size = "medium",

  disabled = false,
  fullWidth = true,
  iconRight = false,

  icon,

  onClick,
}: ButtonProps) {
  const buttonClassName = classnames(
    "button",
    `button--${type}`,
    `button--${size}`,
    {
      "button--disabled": disabled,
      "button-icon-right": iconRight,
      "button-full-width": fullWidth,
    },
    className
  );

  const content =
    typeof children === "string" ? (
      <Typography className="button__text" variant="title-h3">
        {children}
      </Typography>
    ) : (
      children
    );

  return (
    <button
      type="button"
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}

      {content}
    </button>
  );
}

export default Button;
