import { FormContext, useFormContext } from "../contexts/FormContext";
import BackButton from "./UI/button/BackButton";
import ConfirmButton from "./UI/button/ConfirmButton";
import NextStepButton from "./UI/button/NextStepButton";

const FooterSection = () => {
  const { form } = useFormContext(FormContext);

  return (
    <div
      className={`bg-white w-full absolute left-0 bottom-0 py-4 ${
        form.completed && "hidden"
      }`}
    >
      <div className="wrapper relative flex flex-row justify-between items-center">
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
    </div>
  );
};

export default FooterSection;
