import { DmpModule } from "@/types/modules";
import { StepProps } from "@/types/stepProps";

export const dmpModuleMock: DmpModule = {
  steps: [
    {
      nextStep: 2,
      previousStep: 0,
      amountOfSteps: 5,
      currentStep: 1,
      subtitle: "Step 1",
    },
    {
      nextStep: 3,
      previousStep: 1,
      amountOfSteps: 5,
      currentStep: 2,
      subtitle: "Step 2",
    },
    {
      nextStep: 4,
      previousStep: 2,
      amountOfSteps: 5,
      currentStep: 3,
      subtitle: "Step 3",
    },
    {
      nextStep: 5,
      previousStep: 3,
      amountOfSteps: 5,
      currentStep: 4,
      subtitle: "Step 4",
    },
    {
      previousStep: 4,
      nextStep: 5,
      amountOfSteps: 5,
      currentStep: 5,
      subtitle: "Step 5",
    },
  ],
};

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
