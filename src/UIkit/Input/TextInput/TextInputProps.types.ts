import { HTMLInputTypeAttribute } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputProps {
  placeholder?: string;
  className?: string;
  label?: string;
  hintText?: string | null;
  type: HTMLInputTypeAttribute;
  register?: UseFormRegister<FieldValues>;
  name?: string;
  options?: RegisterOptions;
}

export default TextInputProps;
