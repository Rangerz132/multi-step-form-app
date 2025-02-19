import { FormContext, useFormContext } from "../../contexts/FormContext";
import BackButton from "../UI/button/BackButton";
import ConfirmButton from "../UI/button/ConfirmButton";
import NextStepButton from "../UI/button/NextStepButton";

const ProgressNavigatorSection = () => {
  const { form } = useFormContext(FormContext);

  return (
    <div
      className={`relative flex flex-row justify-between items-center w-full ${
        form.completed && "hidden"
      }`}
    >
      <div>
        <BackButton />
      </div>
      <div>
        {form.stepIndex >= form.steps.length - 1 ? (
          <ConfirmButton />
        ) : (
          <NextStepButton />
        )}
      </div>
    </div>
  );
};

export default ProgressNavigatorSection;
