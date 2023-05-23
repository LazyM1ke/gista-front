import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import "./MainPage.scss";
import React from "react";

const MainPage = () => {
  return (
    <div className="main-page">
      <Collapse title="Общая гистология">
        <GistaItem />
        <GistaItem />
        <GistaItem />
        <GistaItem />
      </Collapse>
      <Collapse title="Частная гистология">
        <GistaItem />
        <GistaItem />
        <GistaItem />
        <GistaItem />
      </Collapse>
    </div>
  );
};

export default MainPage;
