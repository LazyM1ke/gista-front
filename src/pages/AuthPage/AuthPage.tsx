import Button from "../../UIkit/Button";
import Typography from "../../UIkit/Typography";
import MacImage from "../../assets/images/iMac.png";
import "./AuthPage.scss";
import React from "react";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__title">
        <Typography variant="display" color="#fff">
          Препараты в 4К
        </Typography>
        <Typography color="#fff">
          Самые качественные препараты для изучения гистологии!
        </Typography>
      </div>
      <div>
        {/*<img src={MacImage} alt="imac" />*/}
        {/*<img src="#" alt="iphone" />*/}
      </div>
      <form className="auth-page__form">
        <Typography className="auth-page__form__title" variant="headline-h2">
          Вход
        </Typography>
        <div className="auth-page__form__inputs">
          <input placeholder="Email" type="text" />
          <input placeholder="Пароль" type="text" />
        </div>
        <Typography variant="text-14" color="#007FFF">
          Забыли пароль?
        </Typography>
        <div className="auth-page__form__submit">
          <Button fullWidth>Войти</Button>
          <div className="auth-page__form__register">
            <Typography color="#787878">Нет аккаунта?</Typography>
            <Typography color="#007FFF">Зарегистрироваться</Typography>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
