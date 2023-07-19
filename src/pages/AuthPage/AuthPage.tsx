import Button from "../../UIkit/Button";
import TextInput from "../../UIkit/Input/TextInput/TextInput";
import Typography from "../../UIkit/Typography";
import MacImage from "../../assets/images/imac.png";
import Header from "../../components/Header/Header";
import AuthService from "../../services/AuthService";
import "./AuthPage.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { atom, useSetRecoilState } from "recoil";

export interface User {
  access: string;
  isStaff: boolean;
  isLogged: boolean;
}

export const userState = atom<User>({
  key: "user",
  default: {
    isLogged: false,
    access: "",
    isStaff: false,
  },
});

const AuthPage = () => {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  const handleAuth = async () => {
    setErrorMessage(null);

    const response = await AuthService.login(username, password);
    if (!response.data.success) {
      response.data.message && setErrorMessage(response.data.message);
    }
    if (response.data.success) {
      localStorage.setItem("token", response.data.access);
      setUserState({
        access: response.data.access,
        isStaff: response.data.is_staff,
        isLogged: true,
      });
      navigate("/");
    }
  };

  if (screenWidth <= 550) {
    return (
      <div className="auth-page__wrapper">
        <Header />
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
                  value={username}
                  setValue={setUsername}
                  placeholder="Имя пользователя"
                />
                <TextInput
                  type="password"
                  className="auth-page__form__input"
                  value={password}
                  setValue={setPassword}
                  placeholder="Пароль"
                  hintText={errorMessage}
                />
                <Typography
                  className="auth-page__form__forgot"
                  variant="text-14"
                  color="#007FFF"
                >
                  Забыли пароль?
                </Typography>
              </div>
            </form>
            <div className="auth-page__form__submit">
              <Button
                className="auth-page__form__submit-btn"
                size="large"
                fullWidth
                type="invert"
                onClick={handleAuth}
              >
                Войти
              </Button>
              <div className="auth-page__form__register">
                <Typography color="#FFFFFF">Нет аккаунта?</Typography>
                <Button
                  size="small"
                  className="auth-page__form__register-btn"
                  type="invert"
                >
                  <Typography color="#007FFF" variant="text-14">
                    Зарегистрироваться
                  </Typography>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="auth-page__wrapper">
      <Header>
        <>
          <Button size="medium" type="primary">
            Зарегистрироваться
          </Button>
          <Button size="medium" type="secondary">
            Войти
          </Button>
        </>
      </Header>
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
          <div className="auth-page__img">
            <img src={MacImage} alt="imac" />
          </div>

          <div className="auth-page__form__wrapper">
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
                  value={username}
                  setValue={setUsername}
                  placeholder="Имя пользователя"
                />
                <TextInput
                  type="password"
                  className="auth-page__form__input"
                  value={password}
                  setValue={setPassword}
                  placeholder="Пароль"
                  hintText={errorMessage}
                />
              </div>
              <Typography variant="text-14" color="#007FFF">
                Забыли пароль?
              </Typography>
              <div className="auth-page__form__submit">
                <Button size="large" fullWidth onClick={handleAuth}>
                  Войти
                </Button>
                <div className="auth-page__form__register">
                  <Typography color="#787878">Нет аккаунта?</Typography>
                  <Typography color="#007FFF">Зарегистрироваться</Typography>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
