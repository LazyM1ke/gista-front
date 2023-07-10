import NumberInput from "../../../../../UIkit/Input/NumberInput/NumberInput";
import Typography from "../../../../../UIkit/Typography";
import "./ThirdStep.scss";
import React, { useState } from "react";
import StepProps from "../StepProsp.types";
import Button from "../../../../../UIkit/Button";

const ThirdStep = ({setStep}: StepProps) => {
  return (
    <div className="third-step">
      <div className="third-step__title">
        <Typography variant="text-16">
          На адрес sense.nessa@gmail.com выслан код подтверждения. Проверьте
          папку “Спам”
        </Typography>
      </div>
      <div className="third-step__inputs">
        {/*инпуты нужно будет доделать*/}
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
      </div>
        <Button size="large" fullWidth onClick={() => setStep(4)}>
            Продолжить
        </Button>
    </div>
  );
};

export default ThirdStep;
