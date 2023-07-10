import "./FormStepper.scss";
import FormStepperProps from "./FormStepperProps.types";
import React from "react";

const FormStepper = ({ steps, activeStep }: FormStepperProps) => {
  function getStepClass(step: number) {
    let cls = "step";
    if (activeStep === step) {
      cls += " step-active";
    } else if (activeStep > step) {
      cls += " step-done";
    } else {
      cls += " step-inactive";
    }
    return cls;
  }

  return (
    <div className="steps-container">
      {steps.map((step, index) => (
        <div className={getStepClass(step)} key={index}>
          <div>
            <div className="circle">{step}</div>
          </div>
          {step < steps.length && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};

export default FormStepper;
