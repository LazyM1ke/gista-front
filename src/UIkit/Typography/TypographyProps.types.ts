import { TypographyVariants } from "../../assets/styles/typography/export.scss";
import { ReactNode } from "react";

interface TypographyProps {
  className?: string;
  children?: ReactNode | undefined;
  color?: string;
  variant?: TypographyVariants;
}

export default TypographyProps;
