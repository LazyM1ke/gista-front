import Button from "../../UIkit/Button";
import TextInput from "../../UIkit/Input/TextInput/TextInput";
import Typography from "../../UIkit/Typography";
import MacImage from "../../assets/images/imac.png";
import "./AuthPage.scss";
import React, { useEffect, useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  if (screenWidth <= 550) {
    return (
      <div className="auth-page">
        <div className="auth-page__content">
          <form className="auth-page__form">
            <Typography
              className="auth-page__form__title"
              variant="headline-h2"
            >
              Вход
            </Typography>
            <div className="auth-page__form__inputs">
              <TextInput
                type="text"
                className="auth-page__form__input"
                value={email}
                setValue={setEmail}
                placeholder="E-mail"
              />
              <TextInput
                type="password"
                className="auth-page__form__input"
                value={password}
                setValue={setPassword}
                placeholder="Пароль"
              />
            </div>
            <Typography variant="text-14" color="#007FFF">
              Забыли пароль?
            </Typography>
          </form>
          <div className="auth-page__form__submit">
            <Button fullWidth type="invert">
              Войти
            </Button>
            <div className="auth-page__form__register">
              <Typography color="#FFFFFF">Нет аккаунта?</Typography>
              <Button className="auth-page__form__register-btn" type="invert">
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
      <div className="auth-page__content">
        <div>
          <img className="auth-page__img" src={MacImage} alt="imac" />
        </div>

        <form className="auth-page__form">
          <Typography className="auth-page__form__title" variant="headline-h2">
            Вход
          </Typography>
          <div className="auth-page__form__inputs">
            <TextInput
              type="text"
              className="auth-page__form__input"
              value={email}
              setValue={setEmail}
              placeholder="E-mail"
            />
            <TextInput
              type="password"
              className="auth-page__form__input"
              value={password}
              setValue={setPassword}
              placeholder="Пароль"
            />
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
    </div>
  );
};

export default AuthPage;
