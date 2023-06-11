import { ColorNames } from "../../assets/styles/colors/export.scss";
import { IconNameTypes } from "./IconPaths";

interface IconProps {
  className?: string;
  onClick?: () => void;

  iconName: IconNameTypes;
  size?: number;
  width?: number;
  height?: number;
  viewBox?: number;
  color?: string;
  fill?: string;
}

export default IconProps;
