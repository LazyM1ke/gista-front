import Icon from "../../UIkit/Icon";
import Typography from "../../UIkit/Typography";
import "./SideBar.scss";
import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__tabs">
        <div className="sidebar__tabs__item">
          <Icon iconName="keyboardOpen" />
          <Typography>Главная</Typography>
        </div>
        <div className="sidebar__tabs__item">
          <Icon iconName="huobitoken" />
          <Typography>Подписка</Typography>
        </div>
        <div className="sidebar__tabs__item">
          <Icon iconName="user" />
          <Typography>Аккаунт</Typography>
        </div>
        <div className="sidebar__tabs__item">
          <Icon iconName="star" />
          <Typography>Избранное</Typography>
        </div>
      </div>

      <div className="sidebar__settings">
        <div className="sidebar__settings__item">
          <Icon iconName="setting" />
          <Typography>Настройки</Typography>
        </div>
        <div className="sidebar__settings__item">
          <Icon iconName="exit" />
          <Typography>Выйти</Typography>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
