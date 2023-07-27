import { TypographyVariants } from "../../assets/styles/typography/export.scss";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TypographyProps {
  className?: string;
  children?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  color?: string;
  variant?: TypographyVariants;
}

export default TypographyProps;
