import Icon from "../../UIkit/Icon";
import { IconNameTypes } from "../../UIkit/Icon/IconPaths";
import Typography from "../../UIkit/Typography";
import "./SideBar.scss";
import classnames from "classnames";
import React, { useState } from "react";

type IMenuItem = {
  id: number;
  title: string;
  iconName: IconNameTypes;
};

const menuItems: IMenuItem[] = [
  {
    id: 1,
    title: "Главная",
    iconName: "keyboardOpen",
  },
  {
    id: 2,
    title: "Подписка",
    iconName: "huobitoken",
  },
  {
    id: 3,
    title: "Аккаунт",
    iconName: "user",
  },
  {
    id: 4,
    title: "Избранное",
    iconName: "star",
  },
];

const settingsItems: IMenuItem[] = [
  {
    id: 5,
    title: "Учебный план",
    iconName: "book",
  },
  {
    id: 6,
    title: "Настройки",
    iconName: "setting",
  },
];

const SideBar = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="sidebar">
      <div className="sidebar__tabs">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={
              active === item.id
                ? "sidebar__tabs__item active"
                : "sidebar__tabs__item"
            }
            onClick={() => setActive(item.id)}
          >
            <Icon
              color={active === item.id ? "#007FFF" : "#787878"}
              iconName={item.iconName}
            />
            <Typography color={active === item.id ? "#007FFF" : "#000000"}>
              {item.title}
            </Typography>
          </div>
        ))}
      </div>

      <div className="sidebar__settings">
        {settingsItems.map((item) => (
          <div
            key={item.id}
            className={
              active === item.id
                ? "sidebar__tabs__item active"
                : "sidebar__tabs__item"
            }
            onClick={() => setActive(item.id)}
          >
            <Icon
              color={active === item.id ? "#007FFF" : "#787878"}
              iconName={item.iconName}
            />
            <Typography color={active === item.id ? "#007FFF" : "#000000"}>
              {item.title}
            </Typography>
          </div>
        ))}
        <div className="sidebar__tabs__item">
          <Icon iconName="exit" />
          <Typography>Выйти</Typography>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
