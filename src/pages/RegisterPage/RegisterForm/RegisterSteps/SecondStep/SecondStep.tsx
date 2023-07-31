import Button from "../../../../../UIkit/Button";
import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import {
  setEmail,
  setPhone,
} from "../../../../../store/Reducers/UserReducer/UserReducer";
import { useAppDispatch } from "../../../../../store/hooks/hooks";
import { StepProps } from "../../RegisterForm";
import "./SecondStep.scss";
import React from "react";
import { useForm } from "react-hook-form";

const SecondStep = ({ setStep }: StepProps) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    dispatch(setEmail(data.email));
    dispatch(setPhone(data.phone.replace(/[^\+\d]/g, "")));
    setStep(3);
  });

  return (
    <form onSubmit={onSubmit} className="second-step">
      <div className="second-step__inputs">
        <TextInput
          register={register}
          name="phone"
          type="tel"
          placeholder="Номер телефона"
          options={{
            required: {
              value: true,
              message: `Поле "Номер телефона" является обязательным`,
            },
            minLength: {
              value:
                getValues("phone") && getValues("phone")[0] === "+" ? 20 : 19,
              message: "ошибка!",
            },
          }}
          hintText={errors.phone?.message}
        />
        <TextInput
          register={register}
          name="email"
          type="text"
          placeholder="E-mail"
          options={{
            required: {
              value: true,
              message: `Поле "E-mail" является обязательным`,
            },
            pattern: {
              message: "E-mail не валиден",
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            },
          }}
          hintText={errors.email?.message}
        />
      </div>
      <Button as="submit" size="large" fullWidth>
        Продолжить
      </Button>
    </form>
  );
};

export default SecondStep;
