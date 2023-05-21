import "./Typography.scss";
import TypographyProps from "./TypographyProps.types";
import classnames from "classnames";

function Typography({
  variant = "display",
  color,
  className,
  children,
}: TypographyProps) {
  const typographyClass = classnames(
    "typography",
    `typography--${variant}`,
    className
  );
  const typographyStyle: React.CSSProperties = {};

  if (color) {
    typographyStyle.color = color;
  }

  return (
    <p className={typographyClass} style={typographyStyle}>
      {children}
    </p>
  );
}

export default Typography;
