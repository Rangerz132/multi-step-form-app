import { FormContext, useFormContext } from "../contexts/FormContext";
import { FORM_STEP_LIST } from "../data";
import FormStep from "./formStep/FormStep";

const FormManager = () => {
  const { form } = useFormContext(FormContext);
  return (
    <div>
      {FORM_STEP_LIST.map(
        (formStep, index) =>
          form === index && <FormStep key={index} data={formStep} />
      )}
    </div>
  );
};

export default FormManager;
