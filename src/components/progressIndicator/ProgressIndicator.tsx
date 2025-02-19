import { FormContext, useFormContext } from "../../contexts/FormContext";

const ProgressIndicator = (props: { index: number }) => {
  const { form } = useFormContext(FormContext);
  return (
    <div className="flex flex-row md:space-x-3 md:items-center">
      {/** Dot */}
      <div
        className={`rounded-full  border-1 border-white w-8 h-8 flex items-center justify-center transition-all duration-200 ${
          form.stepIndex === props.index
            ? "bg-primary-light-blue text-primary-marine-blue"
            : "bg-transparent text-white "
        }`}
      >
        {props.index + 1}
      </div>
      {/** Content */}
      <div className=" uppercase  hidden md:flex md:flex-col">
        <div className="text-xs">Step {props.index}</div>
        <div className="text-white font-bold">
          {form.steps[props.index].stepTitle}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
