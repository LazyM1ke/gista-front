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
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    dispatch(setEmail(data.email));
    dispatch(setPhone(data.phone));
    setStep(3);
  });

  return (
    <form onSubmit={onSubmit} className="second-step">
      <div className="second-step__inputs">
        <TextInput
          register={register}
          name="phone"
          type="text"
          placeholder="Номер телефона"
          options={{
            required: {
              value: true,
              message: `Поле "Номер телефона" является обязательным`,
            },
            pattern: {
              message: "Номер телефона не валиден",
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
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
