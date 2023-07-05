import StepsIndicator from "@/components/Progress";
import { getStepData } from "@/utils/getMockData";
import Link from "next/link";

const Step = ({
  params,
}: {
  params: { decision: string; current: string };
}) => {
  const currentStep = params.current;
  const userChoice = params.decision;

  const data = getStepData(userChoice, parseInt(currentStep));
  if (!data) return <div>404</div>;
  console.log(userChoice);

  return (
    <main className="flex flex-col content-center justify-center  w-2/3">
      <h1 className="text-5xl font-bold text-purple-800">
        Step {data.step?.currentStep}
      </h1>
      <div className="mt-14 mb-6 p-4 rounded-md bg-slate-100 flex flex-col shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">
          {data.step?.subtitle}
        </h2>
        <p className="mb-4 text-slate-900"> the body goes here man</p>
        <Link href={`${data.step?.nextStep}`} className="self-end">
          <button className="btn btn-primary">Next</button>
        </Link>
      </div>
      <StepsIndicator
        currentStep={data.step?.currentStep || 0}
        steps={data.steps}
      />
    </main>
  );
};

export default Step;
