import Button from "../../../../../UIkit/Button";
import Icon from "../../../../../UIkit/Icon";
import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import Typography from "../../../../../UIkit/Typography";
import "./FourthStep.scss";
import React from "react";
import { useForm } from "react-hook-form";

const FourthStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <form className="fourth-step" onSubmit={onSubmit}>
      <div className="fourth-step__inputs">
        <TextInput
          name="password"
          register={register}
          placeholder="Пароль"
          type="password"
          options={{ required: true }}
          hintText={errors.password?.message ? errors.password?.message : ""}
        />
        <div className="fourth-step__validation">
          <div className="fourth-step__validation__container">
            <div className="fourth-step__validation__item">
              <Icon height={8} width={8} fill={"#A1A1A1"} iconName="circle" />
              <Typography variant="text-14" color="#A1A1A1">
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
          placeholder="Подтверждение пароля"
          type="password"
        />
      </div>
      <Button as="submit" size="large" fullWidth>
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default FourthStep;
