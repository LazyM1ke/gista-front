import Typography from "../../../UIkit/Typography";
import FormStepper from "../../../components/FormStepper/FormStepper";
import FirstStep from "./RegisterSteps/FirstStep/FirstStep";
import FourthStep from "./RegisterSteps/FourthStep/FourthStep";
import SecondStep from "./RegisterSteps/SecondStep/SecondStep";
import ThirdStep from "./RegisterSteps/ThirdStep/ThirdStep";
import React, { useState } from "react";

export type RegisterStep = 1 | 2 | 3 | 4;

const RegisterForm = () => {
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
    <form className="auth-page__form">
      <Typography className="auth-page__form__title" variant="headline-h2">
        Создание аккаунта
      </Typography>
      <FormStepper steps={steps} activeStep={step} />
      {getStep()}

      <div className="auth-page__form__submit">
        <div className="auth-page__form__register">
          <Typography color="#787878">Есть аккаунт?</Typography>
          <Typography variant="title-h3" color="#007FFF">
            Войти
          </Typography>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
