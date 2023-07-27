import Button from "../../UIkit/Button";
import TextInput from "../../UIkit/Input/TextInput/TextInput";
import Typography from "../../UIkit/Typography";
import MacImage from "../../assets/images/imac.png";
import Header from "../../components/Header/Header";
import AuthService from "../../services/AuthService";
import "./AuthPage.scss";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  const onSubmit = handleSubmit(async (data) => {
    const response = await AuthService.login(data.username, data.password);
    if (!response.data.success) {
      response.data.message && setErrorMessage(response.data.message);
    }
    if (response.data.success) {
      localStorage.setItem("token", response.data.access);
      navigate("/");
    }
  });

  if (screenWidth <= 550) {
    return (
      <div className="auth-page__wrapper">
        <Header />
        <div className="auth-page">
          <div className="auth-page__content">
            <form onSubmit={onSubmit} className="auth-page__form">
              <Typography
                className="auth-page__form__title"
                variant="headline-h2"
              >
                Вход
              </Typography>
              <div className="auth-page__form__inputs">
                <TextInput
                  name="username"
                  register={register}
                  type="text"
                  className="auth-page__form__input"
                  placeholder="Имя пользователя"
                />
                <TextInput
                  name="password"
                  register={register}
                  type="password"
                  className="auth-page__form__input"
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
              <div className="auth-page__form__submit">
                <Button
                  as={"submit"}
                  className="auth-page__form__submit-btn"
                  size="large"
                  fullWidth
                  type="invert"
                >
                  Войти
                </Button>
              </div>
            </form>
            <div className="auth-page__form__submit">
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
          <Button onClick={() => navigate("/reg")} size="medium" type="primary">
            Зарегистрироваться
          </Button>
          <Button
            onClick={() => navigate("/auth")}
            size="medium"
            type="secondary"
          >
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
            <form onSubmit={onSubmit} className="auth-page__form">
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
                  name="username"
                  register={register}
                  placeholder="Имя пользователя"
                />
                <TextInput
                  type="password"
                  className="auth-page__form__input"
                  name="password"
                  register={register}
                  placeholder="Пароль"
                  hintText={errorMessage}
                />
              </div>
              <Typography variant="text-14" color="#007FFF">
                Забыли пароль?
              </Typography>
              <div className="auth-page__form__submit">
                <Button as={"submit"} size="large" fullWidth>
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
