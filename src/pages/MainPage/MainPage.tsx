import Icon from "../../UIkit/Icon";
import Typography from "../../UIkit/Typography";
import GistaItem from "../../components/GistaItem/GistaItem";
import "./MainPage.scss";
import React from "react";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__collapse-title">
        <Typography variant="headline-h1">Общая Гистология</Typography>
        <Icon iconName="arrowUp" />
      </div>
      <div className="main-page__content">
        <GistaItem />
        <GistaItem />
        <GistaItem />
        <GistaItem />
      </div>
    </div>
  );
};

export default MainPage;
