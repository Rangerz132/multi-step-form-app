import { FormContext, useFormContext } from "../contexts/FormContext";
import { FORM_STEP_LIST } from "../data";
import ConfirmationSection from "./ConfirmationSection";
import FormStep from "./formStep/FormStep";

const FormManager = () => {
  const { form } = useFormContext(FormContext);
  return (
    <div className="bg-white shadow-xl shadow-neutral-light-gray rounded-2xl">
      {form.completed ? (
        <ConfirmationSection />
      ) : (
        FORM_STEP_LIST.map(
          (formStep, index) =>
            form.stepIndex === index && <FormStep key={index} data={formStep} />
        )
      )}
    </div>
  );
};

export default FormManager;
