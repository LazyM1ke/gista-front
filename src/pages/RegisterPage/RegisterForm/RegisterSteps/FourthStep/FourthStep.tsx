import Icon from "../../../../../UIkit/Icon";
import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import Typography from "../../../../../UIkit/Typography";
import "./FourthStep.scss";
import React, { useState } from "react";

const FourthStep = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div className="fourth-step">
      <TextInput
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
    </div>
  );
};

export default FourthStep;
