import ProgressIndicator from "@/components/Progress";
import { getStepData } from "@/utils/getMockData";
import Link from "next/link";

const getStepData = () => {
  //fetch the stepData here 
}

const Step = ({ params }: { params: { current: string } }) => {
  const currentStep = params.current;

  const stepData = getStepData(parseInt(currentStep));
  console.log(stepData);

  return (
    <main className='flex flex-col content-center justify-center  w-2/3'>
      <h1 className="text-5xl font-bold text-purple-800">Step {stepData.currentStep}</h1>
      <div className="mt-14 p-4 rounded-md bg-slate-100 flex flex-col shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">subtitle</h2>
        <p className="mb-4 text-slate-900"> the body goes here man</p>
        <Link href={`${stepData.nextStep}`} className="self-end">
          <button className="btn btn-primary">Next</button>
        </Link>
      </div>
        <progress className="progress-primary mt-10" value={0} max="100"></progress>
      </main>
  );
};

export default Step;
