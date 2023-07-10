import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import React, { useState } from "react";
import StepProps from "../StepProsp.types";
import Button from "../../../../../UIkit/Button";

const SecondStep = ({setStep}: StepProps) => {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  return (
    <div className="auth-page__form__inputs">
      <TextInput
        type="text"
        value={phone}
        setValue={setPhone}
        placeholder="Номер телефона"
      />
      <TextInput
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="E-mail"
      />
        <Button size="large" fullWidth onClick={() => setStep(3)}>
            Продолжить
        </Button>
    </div>
  );
};

export default SecondStep;
