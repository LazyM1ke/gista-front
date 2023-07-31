import { HTMLInputTypeAttribute } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface TextInputProps {
  placeholder?: string;
  className?: string;
  label?: string;
  hintText?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | null;
  type: HTMLInputTypeAttribute;
  register?: UseFormRegister<FieldValues>;
  name?: string;
  options?: RegisterOptions;
}

export default TextInputProps;
