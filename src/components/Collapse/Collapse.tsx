import Icon from "../../UIkit/Icon";
import Typography from "../../UIkit/Typography";
import "./Collapse.scss";
import CollapseProps from "./CollapseProps.types";
import classNames from "classnames";
import React, { useState } from "react";

const Collapse = ({ title, children, className }: CollapseProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const CollapseClassName = classNames("collapse", className);

  return (
    <div className={CollapseClassName}>
      <div className="collapse__wrapper" onClick={() => setIsOpened(!isOpened)}>
        <Typography variant="headline-h1">{title}</Typography>
        <Icon color="#000000" iconName={isOpened ? "arrowUp" : "arrowDown"} />
      </div>
      <div className="collapse__content">{isOpened && children}</div>
    </div>
  );
};

export default Collapse;
