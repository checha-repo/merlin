import ProgressIndicator from "@/components/Progress";
import { getStepData } from "@/utils/getMockData";
import Link from "next/link";

const Step = ({ params }: { params: { current: string } }) => {
  const currentStep = params.current;

  const stepData = getStepData(parseInt(currentStep));
  console.log(stepData);

  return (
    <div>
      <ProgressIndicator
        currentStep={stepData.currentStep}
        totalSteps={stepData.amountOfSteps}
      />
      <h1>Step {stepData.currentStep}</h1>
      <Link href={`${stepData.previousStep}`}>
        <button className="btn btn-primary">Previous</button>
      </Link>
      <Link href={`${stepData.nextStep}`}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </div>
  );
};

export default Step;
