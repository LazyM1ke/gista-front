import Button from "../../../../../UIkit/Button";
import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import {
  setFirstName,
  setLastName,
  setSurname,
} from "../../../../../store/Reducers/UserReducer/UserReducer";
import { useAppDispatch } from "../../../../../store/hooks/hooks";
import { StepProps } from "../../RegisterForm";
import "./FirstStep.scss";
import React from "react";
import { useForm } from "react-hook-form";

const FirstStep = ({ setStep }: StepProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    dispatch(setFirstName(data.first_name));
    dispatch(setLastName(data.last_name));
    dispatch(setSurname(data.surname));
    setStep(2);
  });

  return (
    <form onSubmit={onSubmit} className="first-step">
      <div className="first-step__inputs">
        <TextInput
          register={register}
          name="last_name"
          type="text"
          placeholder="Фамилия"
          options={{
            required: {
              value: true,
              message: `Поле "Фамилия" является обязательным`,
            },
            pattern: {
              message: "Фамилия не валидна",
              value: /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/,
            },
          }}
          hintText={errors.last_name?.message}
        />
        <TextInput
          register={register}
          type="text"
          name="first_name"
          placeholder="Имя"
          options={{
            required: {
              value: true,
              message: `Поле "Имя" является обязательным`,
            },
            pattern: {
              message: "Имя не валидно",
              value: /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/,
            },
          }}
          hintText={errors.first_name?.message}
        />
        <TextInput
          register={register}
          type="text"
          name="surname"
          placeholder="Отчество"
          options={{
            pattern: {
              message: "Отчество не валидно",
              value: /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/,
            },
          }}
          hintText={errors.surname?.message}
        />
      </div>
      <Button as="submit" size="large" fullWidth>
        Продолжить
      </Button>
    </form>
  );
};

export default FirstStep;
