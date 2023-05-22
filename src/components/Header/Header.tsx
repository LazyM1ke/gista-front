import Logo from "../../UIkit/Logo/Logo";
import Typography from "../../UIkit/Typography";
import "./Header.scss";
import HeaderProps from "./HeaderProps.types";
import React from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
        <Typography variant="title-h1" color="#007FFF">
          Сдать Гисту
        </Typography>
      </div>
      <div className="header__btns">{children}</div>
    </header>
  );
};

export default Header;
