import { FormStepData } from "../../types";

const FormStep = (props: { data: FormStepData }) => {
  return (
    <div className="flex flex-col w-full space-y-3">
      <div className="flex flex-col w-full space-y-3">
        {/** Title */}
        <h1>{props.data.title}</h1>
        {/** Description */}
        <p>{props.data.description}</p>
      </div>
      {/** Data */}
      <div>{props.data.data()}</div>
    </div>
  );
};

export default FormStep;
