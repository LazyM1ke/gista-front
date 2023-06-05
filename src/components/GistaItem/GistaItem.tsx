import Icon from "../../UIkit/Icon";
import Typography from "../../UIkit/Typography";
import GistaImage from "../../assets/images/Intersect.png";
import "./GistaItem.scss";
import GistaItemProps from "./GistaItemProps.types";
import React, { useState } from "react";

const GistaItem = ({ editable = false }: GistaItemProps) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="gista-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={GistaImage} alt="gista" />
      <div className="gista-item__content">
        <Typography className="gista-item__title" variant="headline-h2">
          Мазок крови человека – окраска: азур II и эозин
        </Typography>
        <div className="gista-item__icons">
          {hover && editable && (
            <>
              <Icon iconName="edit" />
              <Icon iconName="trash" />
            </>
          )}
          {hover && !editable && (
            <>
              <Icon iconName="star" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GistaItem;
