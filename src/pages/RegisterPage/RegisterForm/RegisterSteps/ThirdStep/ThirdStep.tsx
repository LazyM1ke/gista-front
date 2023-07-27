import Button from "../../../../../UIkit/Button";
import Typography from "../../../../../UIkit/Typography";
import { StepProps } from "../../RegisterForm";
import "./ThirdStep.scss";
import React, { useState } from "react";
import AuthCode from "react-auth-code-input";

const ThirdStep = ({ setStep }: StepProps) => {
  const [code, setCode] = useState<string>("");

  const onSubmit = () => {
    setStep(4);
  };

  return (
    <form onSubmit={onSubmit} className="third-step">
      <div className="third-step__title">
        <Typography variant="text-16">
          На адрес sense.nessa@gmail.com выслан код подтверждения. Проверьте
          папку “Спам”
        </Typography>
      </div>
      <div className="third-step__inputs">
        <AuthCode
          containerClassName="code-container"
          inputClassName="code"
          allowedCharacters="numeric"
          onChange={(res) => setCode(res)}
        />
      </div>
      <Button as="submit" size="large" fullWidth>
        Продолжить
      </Button>
    </form>
  );
};

export default ThirdStep;
