import { dmpModuleMock, stepOneMock } from "@/mocks/stepMocks";

// function to get step data from current step dmpModuleMock
export const getStepData = (step: number) => {
  return dmpModuleMock.steps[step - 1];
};
