import Button from "../../../UIkit/Button";
import Typography from "../../../UIkit/Typography";
import FormStepper from "../../../components/FormStepper/FormStepper";
import FirstStep from "./RegisterSteps/FirstStep/FirstStep";
import FourthStep from "./RegisterSteps/FourthStep/FourthStep";
import SecondStep from "./RegisterSteps/SecondStep/SecondStep";
import ThirdStep from "./RegisterSteps/ThirdStep/ThirdStep";
import React, { useState } from "react";

type RegisterStep = 1 | 2 | 3 | 4;

const RegisterForm = () => {
  const [step, setStep] = useState<number>(1);

  const steps = [1, 2, 3, 4];
  const getStep = () => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;
      default:
        return <FirstStep />;
    }
  };

  return (
    <form className="auth-page__form">
      <Typography className="auth-page__form__title" variant="headline-h2">
        Создание аккаунта
      </Typography>
      <FormStepper steps={steps} activeStep={step} />
      {getStep()}

      <Button size="large" fullWidth onClick={() => setStep(step + 1)}>
        {step === 1 || step === 2 || step === 3
          ? "Продолжить"
          : "Зарегистрироваться"}
      </Button>

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
