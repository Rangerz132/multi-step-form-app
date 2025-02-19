import Button from "./Button";
import { FormContext, useFormContext } from "../../../contexts/FormContext";

const ConfirmButton = () => {
  const { form, setForm } = useFormContext(FormContext);

  function handleButtonClick() {
    setForm({ ...form, completed: true });
  }

  return (
    <Button onClick={() => handleButtonClick()} className="cta-2">
      Confirm
    </Button>
  );
};

export default ConfirmButton;
