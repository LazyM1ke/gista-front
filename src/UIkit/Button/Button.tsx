import Typography from "../Typography";
import "./Button.scss";
import ButtonProps from "./ButtonProps.types";
import classnames from "classnames";
import React from "react";

const Button = ({
  className,
  children = "",

  as = 'button',
  type = "primary",
  size = "medium",

  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,

  onClick,
}: ButtonProps) => {
  const buttonClassName = classnames(
    "button",
    `button--${type}`,
    `button--${size}`,
    {
      "button--disabled": disabled,
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
      type={as}
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon}

      {content}

      {rightIcon}
    </button>
  );
};

export default Button;
