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
import { Controller, useForm } from "react-hook-form";

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
            minLength: {
              value: 2,
              message: "Должно быть не менее 2 символов",
            },
            pattern: {
              message: "Фамилия не валидна",
              value: /^[А-ЯЁ][а-яё]*$/,
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
            minLength: {
              value: 2,
              message: "Должно быть не менее 2 символов",
            },
            pattern: {
              message: "Имя не валидно",
              value: /^[А-ЯЁ][а-яё]*$/,
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
              value: /^[А-ЯЁ][а-яё]*$/,
            },
            minLength: {
              value: 2,
              message: "Должно быть не менее 2 символов",
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
