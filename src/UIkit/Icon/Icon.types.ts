import { ColorNames } from "../../assets/styles/colors/export.scss";
import { IconNameTypes } from "./IconPaths";

interface IconProps {
  className?: string;

  iconName: IconNameTypes;
  size?: number;
  width?: number;
  height?: number;
  viewBox?: number;
  color?: ColorNames;
}

export default IconProps;
