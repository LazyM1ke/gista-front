import Button from "../../../../../UIkit/Button";
import Icon from "../../../../../UIkit/Icon";
import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import Typography from "../../../../../UIkit/Typography";
import "./FourthStep.scss";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const FourthStep = () => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form className="fourth-step" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        register={register}
        placeholder="Пароль"
        value={password}
        setValue={setPassword}
        type="password"
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
        placeholder="Подтверждение пароля"
        value={confirmPassword}
        setValue={setConfirmPassword}
        type="password"
      />
      <Button as="submit" size="large" fullWidth>
        submit
      </Button>
    </form>
  );
};

export default FourthStep;
