import Typography from "../../../UIkit/Typography";
import FormStepper from "../../../components/FormStepper/FormStepper";
import FirstStep from "./RegisterSteps/FirstStep/FirstStep";
import FourthStep from "./RegisterSteps/FourthStep/FourthStep";
import SecondStep from "./RegisterSteps/SecondStep/SecondStep";
import ThirdStep from "./RegisterSteps/ThirdStep/ThirdStep";
import React, {useMemo, useState} from "react";
import './RegisterForm.scss'
import Button from "../../../UIkit/Button";
import {useNavigate} from "react-router-dom";

export type RegisterStep = 1 | 2 | 3 | 4;

const RegisterForm = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState<RegisterStep>(1);

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

  const activeButton = useMemo(() => {
    let buttonText = "Продолжить"
    let buttonHandler = () => setStep(1)
    if (step === 1) {
      buttonText = 'Продолжить'
      buttonHandler = () => setStep(2)
    }
    if (step === 2) {
      buttonText = 'Продолжить'
      buttonHandler = () => setStep(3)
    }
    if (step === 3) {
      buttonText = 'Продолжить'
      buttonHandler = () => setStep(4)
    }
    if (step === 4) {
      buttonText = 'Зарегистрироваться'
      buttonHandler = () => navigate('/auth')
    }
    return <Button as='submit' size="large" fullWidth onClick={buttonHandler}>{buttonText}</Button>
  }, [step])

  return (
      <div className='register-form'>
        <Typography className="register-form__title" variant="headline-h2">
          Создание аккаунта
        </Typography>

        <FormStepper steps={steps} activeStep={step} />

        {getStep()}

        <div className="register-form__account">
          {activeButton}
          <div className='register-form__account__submit'>
            <Typography color="#787878">Есть аккаунт?</Typography>
            <Button onClick={() => navigate('/auth')} type='borderless'>Войти</Button>
          </div>
          </div>
      </div>
    // <form className="auth-page__form">
    //   <Typography className="auth-page__form__title" variant="headline-h2">
    //     Создание аккаунта
    //   </Typography>
    //   <FormStepper steps={steps} activeStep={step} />
    //   {getStep()}
    //
    //   <div className="auth-page__form__submit">
    //     <div className="auth-page__form__register">
    //       <Typography color="#787878">Есть аккаунт?</Typography>
    //       <Typography variant="title-h3" color="#007FFF">
    //         Войти
    //       </Typography>
    //     </div>
    //   </div>
    // </form>
  );
};

export default RegisterForm;
