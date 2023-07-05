import { DmpModule } from "@/types/modules";
import { UserChoiceProp } from "@/types/stepProps";

export const userChoiceMock: UserChoiceProp[] = [
  {
    userChoice: "email",
    totalSteps: 3,
    steps: [
      {
        nextStep: 2,
        previousStep: 0,
        currentStep: 1,
        subtitle: "Mail Step 1",
      },
      {
        nextStep: 3,
        previousStep: 1,
        currentStep: 2,
        subtitle: "Mail Step 2",
      },
      {
        nextStep: 0,
        previousStep: 2,
        currentStep: 3,
        subtitle: "Mail Step 3",
      },
    ],
  },
  {
    userChoice: "external-hosting",
    totalSteps: 3,
    steps: [
      {
        nextStep: 2,
        previousStep: 0,
        currentStep: 1,
        subtitle: "external-hosting Step 1",
      },
      {
        nextStep: 3,
        previousStep: 1,
        currentStep: 2,
        subtitle: "external-hosting Step 2",
      },
      {
        nextStep: 0,
        previousStep: 2,
        currentStep: 3,
        subtitle: "external-hosting Step 3",
      },
    ],
  },
  {
    userChoice: "redirect",
    totalSteps: 3,
    steps: [
      {
        nextStep: 2,
        previousStep: 0,
        currentStep: 1,
        subtitle: "redirect Step 1",
      },
      {
        nextStep: 3,
        previousStep: 1,
        currentStep: 2,
        subtitle: "redirect Step 2",
      },
      {
        nextStep: 0,
        previousStep: 2,
        currentStep: 3,
        subtitle: "redirect Step 3",
      },
    ],
  },
];
