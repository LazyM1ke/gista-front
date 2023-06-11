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
  isEditPosition = false,
  editable = false,
  onEditClick,
  onDeleteClick,
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
          <div className="collapse__title__wrapper">
            {editable && isEditPosition && <Icon iconName="hamburger" />}
            <Typography
              className={
                type === "section" ? "collapse__title--bold" : "collapse__title"
              }
              variant={type === "section" ? "headline-h1" : "title-h1"}
            >
              {title}
            </Typography>
          </div>
          <div className="collapse__icons">
            {hover && editable && (
              <>
                <Icon onClick={onEditClick} iconName="edit" />
                <Icon onClick={onDeleteClick} iconName="trash" />
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
