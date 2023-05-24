import Icon from "../Icon";
import "./CheckBox.scss";
import CheckBoxProps from "./CheckBoxProps.types";
import classNames from "classnames";
import React from "react";

const CheckBox = ({ className, state, onClick }: CheckBoxProps) => {
  const CheckboxClassName = classNames(
    "checkbox",
    state ? "checkbox--checked" : "",
    className
  );
  return (
    <div onClick={onClick} className={CheckboxClassName}>
      {state && <Icon iconName="done" viewBox={35} color="#fff" />}
    </div>
  );
};

export default CheckBox;
