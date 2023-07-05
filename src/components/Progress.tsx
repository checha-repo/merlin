import { ProgressIndicatorProps } from "@/types/progressIndicator";
import { FC } from "react";

const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  totalSteps,
  currentStep,
}) => {
  return (
    <progress
      className="progress-primary"
      value={currentStep}
      max={totalSteps}
    ></progress>
  );
};

export default ProgressIndicator;
