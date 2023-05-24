import Icon from "../../UIkit/Icon";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import MainPage from "../MainPage/MainPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const IndexPage = () => {
  return (
    <div>
      <Header>
        <Icon iconName="profileCircle" />
      </Header>
      <SideBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default IndexPage;
