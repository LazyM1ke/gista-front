import Icon from "../../UIkit/Icon";
import Typography from "../../UIkit/Typography";
import GistaImage from "../../assets/images/Intersect.png";
import "./GistaItem.scss";
import React from "react";

const GistaItem = () => {
  return (
    <div className="gista-item">
      <img src={GistaImage} alt="gista" />
      <div className="gista-item__content">
        <Typography variant="headline-h2">
          Мазок крови человека – окраска: азур II и эозин
        </Typography>
        <Icon iconName="star" />
      </div>
    </div>
  );
};

export default GistaItem;
