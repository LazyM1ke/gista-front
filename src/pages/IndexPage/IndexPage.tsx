import Icon from "../../UIkit/Icon";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import React from "react";

const IndexPage = () => {
  return (
    <div>
      <Header>
        <Icon iconName="profileCircle" />
      </Header>
      <SideBar />
    </div>
  );
};

export default IndexPage;
