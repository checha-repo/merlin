import { getNextStep } from "@/utils/getMockData";
import Link from "next/link";

const Step = ({ params }: { params: { current: string } }) => {
  const currentStep = params.current;

  const stepData = getNextStep(currentStep);
  console.log(stepData);

  return (
    <div>
      <progress className="progress-primary" value={0} max="100"></progress>
      <h1>Step {stepData.currentStep}</h1>
      <Link href={`${stepData.nextStep}`}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </div>
  );
};

export default Step;
