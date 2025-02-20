import Button from "./Button";
import { FormContext, useFormContext } from "../../../contexts/FormContext";

const NextStepButton = () => {
  const { form, setForm } = useFormContext(FormContext);

  function handleButtonClick() {
    setForm({ ...form, stepIndex: form.stepIndex + 1 });
  }

  return (
    <Button
      disabled={!form.isValid}
      onClick={() => handleButtonClick()}
      className={`bg-primary-marine-blue text-white  capitalize px-4 py-2 rounded-md  ${
        form.isValid
          ? "hover:bg-primary-purplish-blue transition-all duration-200"
          : "opacity-50"
      }`}
    >
      Next step
    </Button>
  );
};

export default NextStepButton;
