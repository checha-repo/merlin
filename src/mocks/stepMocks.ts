import { StepProps } from "@/types/stepProps";

export const stepOneMock: StepProps = {
  nextStep: 2,
  previousStep: 0,
  amountOfSteps: 5,
  currentStep: 1,
};

export const stepTwoMock: StepProps = {
  nextStep: 3,
  previousStep: 1,
  amountOfSteps: 5,
  currentStep: 2,
};

export const stepThreeMock: StepProps = {
  nextStep: 4,
  previousStep: 2,
  amountOfSteps: 5,
  currentStep: 3,
};
