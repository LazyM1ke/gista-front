import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import React, { useState } from "react";
import Button from "../../../../../UIkit/Button";
import StepProps from "../StepProsp.types";

const FirstStep = ({setStep}: StepProps) => {
  const [surname, setSurname] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [patronymic, setPatronymic] = useState<string>("");
  return (
    <div className="auth-page__form__inputs">
      <TextInput
        type="text"
        value={surname}
        setValue={setSurname}
        placeholder="Фамилия"
      />
      <TextInput
        type="text"
        value={name}
        setValue={setName}
        placeholder="Имя"
      />
      <TextInput
        type="text"
        value={patronymic}
        setValue={setPatronymic}
        placeholder="Отчество"
      />
        <Button size="large" fullWidth onClick={() => setStep(2)}>
         Продолжить
        </Button>
    </div>
  );
};

export default FirstStep;
