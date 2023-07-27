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
  const [surname, setSurname] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [patronymic, setPatronymic] = useState<string>("");

  return (
    <form className="first-step">
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
      <TextInput name="surname" type="text" placeholder="Фамилия" />
      <TextInput type="text" placeholder="Имя" />
      <TextInput type="text" placeholder="Отчество" />
    </form>
  );
};

export default FirstStep;
