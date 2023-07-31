import Button from "../../../../../UIkit/Button";
import Icon from "../../../../../UIkit/Icon";
import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import Typography from "../../../../../UIkit/Typography";
import AuthService from "../../../../../services/AuthService";
import { useAppSelector } from "../../../../../store/hooks/hooks";
import "./FourthStep.scss";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// есть ли спец символ
const specialSymbol = /[\.:,;\?!@#\$%\^&\*_\-\+=]/;

// есть хотя бы одна заглавная буква
const hasCapital = /^[a-zа-я\d]*$/;

// есть хотя бы одна цифра
const oneNumber = /(?=.*[0-9])/;

// не менее 8 символов
const minLength = /[0-9a-zA-Z!@#$%^&*]{8,}/;
const FourthStep = () => {
  const navigate = useNavigate();
  const { email, first_name, last_name, phone, surname } = useAppSelector(
    (state) => state.UserSlice
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log();
    AuthService.register({
      last_name,
      first_name,
      email,
      password: data.password,
      phone,
      surname,
    }).then((response) => {
      if (response.data.success) {
        navigate("/auth");
      }
    });
  });

  return (
    <form className="fourth-step" onSubmit={onSubmit}>
      <div className="fourth-step__inputs">
        <TextInput
          name="password"
          register={register}
          placeholder="Пароль"
          type="password"
          options={{
            required: true,
            minLength: 8,
          }}
          hintText={errors.password?.message ? errors.password?.message : ""}
        />
        <div className="fourth-step__validation">
          <div className="fourth-step__validation__container">
            <div className="fourth-step__validation__item">
              <Icon height={8} width={8} fill={"#A1A1A1"} iconName="circle" />
              <Typography
                className="fourth-step__validation__item"
                variant="text-14"
              >
                Не менее 8 символов
              </Typography>
            </div>
            <div className="fourth-step__validation__item">
              <Icon height={8} width={8} fill={"#A1A1A1"} iconName="circle" />
              <Typography variant="text-14" color="#A1A1A1">
                Заглавная буква
              </Typography>
            </div>
          </div>
          <div className="fourth-step__validation__container">
            <div className="fourth-step__validation__item">
              <Icon height={8} width={8} fill={"#A1A1A1"} iconName="circle" />
              <Typography variant="text-14" color="#A1A1A1">
                Не менее 1 цифры
              </Typography>
            </div>
            <div className="fourth-step__validation__item">
              <Icon height={8} width={8} fill={"#A1A1A1"} iconName="circle" />
              <Typography variant="text-14" color="#A1A1A1">
                Специальный символ
              </Typography>
            </div>
          </div>
        </div>
        <TextInput
          name="confirmPassword"
          register={register}
          options={{
            required: true,
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Пароли не совпадают";
              }
            },
          }}
          placeholder="Подтверждение пароля"
          type="password"
          hintText={errors.confirmPassword?.message}
        />
      </div>
      <Button as="submit" size="large" fullWidth>
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default FourthStep;
