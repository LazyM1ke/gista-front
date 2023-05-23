import Icon from "../../UIkit/Icon";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./PageLayout.scss";
import PageLayoutProps from "./PageLayoutProps.types";
import React from "react";

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="page-layout">
      <Header>
        <Icon iconName="profileCircle" />
      </Header>
      <div className="page-layout__content">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
