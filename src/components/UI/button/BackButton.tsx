import Button from "./Button";
import { FormContext, useFormContext } from "../../../contexts/FormContext";

const BackButton = () => {
  const { form, setForm } = useFormContext(FormContext);

  function handleOnClick() {
    if (form.stepIndex > 0) {
      setForm({ ...form, stepIndex: form.stepIndex - 1 });
    }
  }
  return (
    <Button
      onClick={handleOnClick}
      className={`${form.stepIndex > 0 ? "flex" : "hidden"}`}
    >
      Go back
    </Button>
  );
};

export default BackButton;
