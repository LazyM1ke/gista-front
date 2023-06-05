import Icon from "../../UIkit/Icon";
import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import "./MainPage.scss";
import React from "react";

const MainPage = () => {
  return (
    <div className="main-page">
      <Collapse type="section" title="Общая гистология">
        <GistaItem />
        <GistaItem />
      </Collapse>
      <Collapse type="section" title="Частная гистология">
        <Collapse title="Органы кроветворения и иммуногенеза" type="subsection">
          <GistaItem />
          <GistaItem />
          <GistaItem />
        </Collapse>
        <Collapse title="Органы кроветворения и иммуногенеза" type="subsection">
          <GistaItem />
          <GistaItem />
          <GistaItem />
        </Collapse>
        <Collapse title="Органы кроветворения и иммуногенеза" type="subsection">
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
        </Collapse>
      </Collapse>
    </div>
  );
};

export default MainPage;
