import { StepsIndicatorProps } from "@/types/progressIndicator";
import { FC } from "react";

const StepsIndicator: FC<StepsIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <ul className="steps">
      {steps.map((step) => (
        <li
          className={`step ${
            step.currentStep <= currentStep ? "step-primary" : ""
          }`}
        >
          {step.subtitle}
        </li>
      ))}
    </ul>
  );
};

export default StepsIndicator;
