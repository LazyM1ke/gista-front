import Button from "../../UIkit/Button";
import Logo from "../../UIkit/Logo/Logo";
import Typography from "../../UIkit/Typography";
import "./Header.scss";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
        <Typography variant="title-h1" color="#007FFF">
          Сдать Гисту
        </Typography>
      </div>
      <div className="header__btns">
        <Button type="primary">Зарегистрироваться</Button>
        <Button type="secondary" disabled>
          Войти
        </Button>
      </div>
    </header>
  );
};

export default Header;
