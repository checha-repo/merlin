export interface StepProps {
  nextStep?: number;
  previousStep?: number;
  currentStep: number;
  subtitle?: string;
}

export interface UserChoiceProp {
  steps: StepProps[];
  userChoice: string;
  totalSteps: number;
}
