import Button from "../../UIkit/Button";
import Typography from "../../UIkit/Typography";
import MacImage from "../../assets/images/imac.png";
import Header from "../../components/Header/Header";
import RegisterForm from "./RegisterForm/RegisterForm";
import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
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
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
