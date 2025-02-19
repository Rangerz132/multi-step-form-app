import Button from "./Button";
import { FormContext, useFormContext } from "../../../contexts/FormContext";

const NextStepButton = () => {
  const { form, setForm } = useFormContext(FormContext);

  function handleButtonClick() {
    setForm({ ...form, stepIndex: form.stepIndex + 1 });
  }

  return (
    <Button onClick={() => handleButtonClick()} className="cta-1">
      Next step
    </Button>
  );
};

export default NextStepButton;
