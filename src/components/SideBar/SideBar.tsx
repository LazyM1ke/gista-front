import Icon from "../../UIkit/Icon";
import { IconNameTypes } from "../../UIkit/Icon/IconPaths";
import Typography from "../../UIkit/Typography";
import "./SideBar.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type IMenuItem = {
  id: number;
  title: string;
  iconName: IconNameTypes;
  to: string;
};

const menuItems: IMenuItem[] = [
  {
    id: 1,
    title: "Главная",
    iconName: "keyboardOpen",
    to: "",
  },
  // {
  //   id: 2,
  //   title: "Подписка",
  //   iconName: "huobitoken",
  //   to: "",
  // },
  {
    id: 3,
    title: "Аккаунт",
    iconName: "user",
    to: "",
  },
  {
    id: 4,
    title: "Избранное",
    iconName: "star",
    to: "favorites",
  },
];

const settingsItems: IMenuItem[] = [
  {
    id: 5,
    title: "Учебный план",
    iconName: "book",
    to: "edit",
  },
  {
    id: 6,
    title: "Настройки",
    iconName: "setting",
    to: "",
  },
];

const SideBar = () => {
  const navigate = useNavigate();
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
            onClick={() => {
              setActive(item.id);
              navigate(item.to);
            }}
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
            onClick={() => {
              setActive(item.id);
              navigate(item.to);
            }}
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
