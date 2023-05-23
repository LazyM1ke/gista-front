import Icon from "../../UIkit/Icon";
import Typography from "../../UIkit/Typography";
import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import "./EditPage.scss";
import React from "react";

const EditPage = () => {
  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <Typography variant="headline-h2">
          Редактирование учебного плана
        </Typography>
        <div className="edit-page__header__btns">
          <div className="edit-page__header__btn">
            <Icon color="#007FFF" iconName="bubble" />
            <Typography color="#007FFF">Добавить препарат</Typography>
          </div>
          <div className="edit-page__header__btn">
            <Icon color="#007FFF" iconName="folder" />
            <Typography color="#007FFF">Добавить раздел</Typography>
          </div>
        </div>
      </div>
      <Collapse title="Общая гистология">
        <GistaItem />
        <GistaItem />
        <GistaItem />
        <GistaItem />
      </Collapse>
    </div>
  );
};

export default EditPage;
