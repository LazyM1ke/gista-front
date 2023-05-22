import React, { HTMLInputTypeAttribute, SetStateAction } from "react";

interface TextInputProps {
  placeholder?: string;
  value: string;
  className?: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  label?: string;
  hintText?: string;
  type: HTMLInputTypeAttribute;
}

export default TextInputProps;
