import Button from "../../UIkit/Button";
import TextInput from "../../UIkit/Input/TextInput/TextInput";
import Typography from "../../UIkit/Typography";
import MacImage from "../../assets/images/imac.png";
import Header from "../../components/Header/Header";
import "./AuthPage.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { atom, useSetRecoilState } from "recoil";

interface AuthResponseData {
  status: string;
  refresh: string;
  access: string;
  is_staff: boolean;
  message?: string;
}

export interface User {
  refresh: string;
  access: string;
  isStaff: boolean;
  isLogged: boolean;
}

export const userState = atom<User>({
  key: "user",
  default: {
    isLogged: false,
    refresh: "",
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

  const handleAuth = () => {
    setErrorMessage(null);
    axios
      .post<AuthResponseData>(`${import.meta.env.VITE_API_URL}/api/auth`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.status === "failure") {
          response.data.message && setErrorMessage(response.data.message);
        }
        if (response.data.status === "success") {
          localStorage.setItem("refresh", response.data.refresh);
          localStorage.setItem("access", response.data.access);
          localStorage.setItem("user", username);
          setUserState({
            access: response.data.access,
            refresh: response.data.refresh,
            isStaff: response.data.is_staff,
            isLogged: true,
          });
          navigate("/");
        }
      });
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
