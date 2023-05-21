import { ColorNames } from "../../assets/styles/colors/export.scss";
import { TypographyVariants } from "../../assets/styles/typography/export.scss";

interface TypographyProps {
  className?: string;
  children?: React.ReactNode;
  color?: string;
  variant?: TypographyVariants;
}

export default TypographyProps;
