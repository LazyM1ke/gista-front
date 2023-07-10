import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import React, { useState } from "react";

const SecondStep = () => {
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
    </div>
  );
};

export default SecondStep;
