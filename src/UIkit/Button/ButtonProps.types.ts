import { MouseEventHandler } from "react";

type ButtonTypes = "primary" | "secondary" | "borderless" | "invert";

type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;

  // ? параметр отвечает за тип кнопки
  type?: ButtonTypes;
  // ? параметр отвечает за размер по высоте
  size?: ButtonSize;

  // ? параметр, который отвечает за то, будет ли кнопочка занимать всю доступную ширину
  fullWidth?: boolean;
  disabled?: boolean;

  // ? параметр отвечает за расположение иконки
  iconRight?: boolean;

  icon?: React.ReactNode;

  onClick?: MouseEventHandler;
}

export default ButtonProps;
