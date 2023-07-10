import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import React, { useState } from "react";

const FirstStep = () => {
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
    </div>
  );
};

export default FirstStep;
