import React, { HTMLInputTypeAttribute, SetStateAction } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface TextInputProps {
  placeholder?: string;
  value: string;
  className?: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  label?: string;
  hintText?: string | null;
  type: HTMLInputTypeAttribute;
  register?: UseFormRegister<FieldValues>;
  name?: string;
}

export default TextInputProps;
