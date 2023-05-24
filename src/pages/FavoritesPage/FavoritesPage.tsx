import Typography from "../../UIkit/Typography";
import GistaItem from "../../components/GistaItem/GistaItem";
import PageLayout from "../../components/PageLayout/PageLayout";
import "./FavoritesPage.scss";
import React from "react";

const FavoritesPage = () => {
  return (
    <div className="favorites">
      <Typography className="favorites__title" variant="headline-h1">
        Избранное
      </Typography>
      <div className="favorites__items">
        <GistaItem />
        <GistaItem />
        <GistaItem />
        <GistaItem />
      </div>
    </div>
  );
};

export default FavoritesPage;
