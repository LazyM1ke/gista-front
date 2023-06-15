import Icon from "../../UIkit/Icon";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./Layout.scss";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header>
        <Icon iconName="profileCircle" />
      </Header>
      <div className="layout__content">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
