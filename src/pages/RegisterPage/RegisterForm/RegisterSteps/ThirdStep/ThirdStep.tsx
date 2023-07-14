import Typography from "../../../../../UIkit/Typography";
import "./ThirdStep.scss";
import React, { useState } from "react";
import StepProps from "../StepProsp.types";
import Button from "../../../../../UIkit/Button";
import AuthCode from "react-auth-code-input";

const ThirdStep = ({setStep}: StepProps) => {
    const [code, setCode] = useState<string>('');
  return (
    <div className="third-step">
      <div className="third-step__title">
        <Typography variant="text-16">
          На адрес sense.nessa@gmail.com выслан код подтверждения. Проверьте
          папку “Спам”
        </Typography>
      </div>
      <div className="third-step__inputs">
          <AuthCode containerClassName='code-container' inputClassName='code' allowedCharacters='numeric' onChange={res => setCode(res)} />
      </div>
        <Button size="large" fullWidth onClick={() => setStep(4)}>
            Продолжить
        </Button>
    </div>
  );
};

export default ThirdStep;
