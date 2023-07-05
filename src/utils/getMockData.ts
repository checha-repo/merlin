import { userChoiceMock } from "@/mocks/stepMocks";
import { UserChoiceProp } from "@/types/stepProps";

// function to get step data from current step dmpModuleMock
export const getStepData = (userChoice: string, currentStep: number) => {
  if (!userChoice) {
    return;
  }
  const mockChoice: UserChoiceProp = userChoiceMock.find(
    (choice: { userChoice: string }) => choice.userChoice === userChoice,
  ) as UserChoiceProp;

  if (!mockChoice) {
    return;
  }
  const totalSteps = mockChoice.totalSteps;
  const stepObj = mockChoice.steps.find(
    (step) => step.currentStep === currentStep,
  );

  return {
    total: totalSteps,
    step: stepObj,
    steps: mockChoice.steps,
  };
};
