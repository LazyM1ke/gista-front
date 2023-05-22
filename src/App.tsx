import "./App.scss";
import Button from "./UIkit/Button";
import Icon from "./UIkit/Icon";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import React from "react";

const App = () => {
  return (
    <div className="app">
      <Header>
        <Icon iconName="profileCircle" />
      </Header>
      {/*<AuthPage />*/}
      <div className="app__content">
        <SideBar />
        <MainPage />
      </div>
    </div>
  );
};

export default App;
