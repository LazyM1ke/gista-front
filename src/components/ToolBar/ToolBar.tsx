import Icon from "../../UIkit/Icon";
import "./ToolBar.scss";
import React from "react";

const ToolBar = () => {
  return (
    <div className="toolbar">
      <Icon color="#007FFF" iconName="line" />
      <Icon color="#007FFF" iconName="arrow" />
      <Icon color="#007FFF" iconName="circle" />
      <Icon color="#007FFF" iconName="star" />
      <Icon color="#007FFF" iconName="square" />
      <Icon color="#007FFF" iconName="triangle" />
    </div>
  );
};

export default ToolBar;
