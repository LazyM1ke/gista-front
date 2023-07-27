import Button from "../../../UIkit/Button";
import Typography from "../../../UIkit/Typography";
import FormStepper from "../../../components/FormStepper/FormStepper";
import "./RegisterForm.scss";
import FirstStep from "./RegisterSteps/FirstStep/FirstStep";
import FourthStep from "./RegisterSteps/FourthStep/FourthStep";
import SecondStep from "./RegisterSteps/SecondStep/SecondStep";
import ThirdStep from "./RegisterSteps/ThirdStep/ThirdStep";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

export type RegisterStep = 1 | 2 | 3 | 4;

export interface StepProps {
  setStep: Dispatch<SetStateAction<RegisterStep>>;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<RegisterStep>(1);

  const steps = [1, 2, 3, 4];
  const getStep = () => {
    switch (step) {
      case 1:
        return <FirstStep setStep={setStep} />;
      case 2:
        return <SecondStep setStep={setStep} />;
      case 3:
        return <ThirdStep setStep={setStep} />;
      case 4:
        return <FourthStep />;
      default:
        return <FirstStep setStep={setStep} />;
    }
  };

  return (
    <div className="register-form">
      <Typography className="register-form__title" variant="headline-h2">
        Создание аккаунта
      </Typography>

      <FormStepper steps={steps} activeStep={step} />

      {getStep()}

      <div className="register-form__account">
        <div className="register-form__account__submit">
          <Typography color="#787878">Есть аккаунт?</Typography>
          <Button onClick={() => navigate("/auth")} type="borderless">
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
