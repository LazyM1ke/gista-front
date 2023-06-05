import Icon from "../../UIkit/Icon";
import Typography from "../../UIkit/Typography";
import "./Collapse.scss";
import CollapseProps from "./CollapseProps.types";
import classNames from "classnames";
import React, { useState } from "react";

const Collapse = ({
  title,
  children,
  className,
  type,
  editable = false,
}: CollapseProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const CollapseClassName = classNames("collapse", className);

  return (
    <>
      <div className={CollapseClassName}>
        <div
          className="collapse__wrapper"
          onClick={() => setIsOpened(!isOpened)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Typography
            className={
              type === "section" ? "collapse__title--bold" : "collapse__title"
            }
            variant={type === "section" ? "headline-h1" : "title-h1"}
          >
            {title}
          </Typography>
          <div className="collapse__icons">
            {hover && editable && (
              <>
                <Icon iconName="edit" />
                <Icon iconName="trash" />
              </>
            )}
            <Icon
              color="#000000"
              iconName={isOpened ? "arrowUp" : "arrowDown"}
            />
          </div>
        </div>
      </div>
      {children && isOpened && (
        <div className="collapse__content">{isOpened && children}</div>
      )}
    </>
  );
};

export default Collapse;
