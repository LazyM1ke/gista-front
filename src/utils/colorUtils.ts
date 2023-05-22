import { ColorNames } from "../assets/styles/colors/export.scss";

function getColorAsCSSVariable(colorName: ColorNames) {
  return `var(--${colorName})`;
}

export { getColorAsCSSVariable };
