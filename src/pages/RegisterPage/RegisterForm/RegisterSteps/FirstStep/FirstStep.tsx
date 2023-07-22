import TextInput from "../../../../../UIkit/Input/TextInput/TextInput";
import "./FirstStep.scss";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface FirstInputs {
  surname?: string;
  name?: string;
  patronymic?: string;
}

const FirstStep = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FirstInputs> = (data) => console.log(data);

  const [surname, setSurname] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [patronymic, setPatronymic] = useState<string>("");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="first-step">
      {/*<Controller*/}
      {/*  name="surname"*/}
      {/*  control={control}*/}
      {/*  render={({ field }) => (*/}
      {/*    <TextInput*/}
      {/*      register={register}*/}
      {/*      name="surname"*/}
      {/*      type="text"*/}
      {/*      value={surname}*/}
      {/*      setValue={setSurname}*/}
      {/*      placeholder="Фамилия"*/}
      {/*    />*/}
      {/*  )}*/}
      {/*/>*/}
      {/*<Controller*/}
      {/*    name="name"*/}
      {/*    control={control}*/}
      {/*    render={({ field }) => <TextInput*/}
      {/*        {...field}*/}
      {/*        type="text"*/}
      {/*        value={name}*/}
      {/*        setValue={setName}*/}
      {/*        placeholder="Имя"*/}
      {/*    />}*/}
      {/*/>*/}
      {/*<Controller*/}
      {/*    name="patronymic"*/}
      {/*    control={control}*/}
      {/*    render={({ field }) => <TextInput*/}
      {/*        {...field}*/}
      {/*        type="text"*/}
      {/*        value={patronymic}*/}
      {/*        setValue={setPatronymic}*/}
      {/*        placeholder="Отчество"*/}
      {/*    />}*/}
      {/*/>*/}
      <TextInput
        register={register}
        name="surname"
        type="text"
        value={surname}
        setValue={setSurname}
        placeholder="Фамилия"
      />
      <TextInput
        {...register("name")}
        type="text"
        value={name}
        setValue={setName}
        placeholder="Имя"
      />
      <TextInput
        {...register("patronymic")}
        type="text"
        value={patronymic}
        setValue={setPatronymic}
        placeholder="Отчество"
      />
    </form>
  );
};

export default FirstStep;
