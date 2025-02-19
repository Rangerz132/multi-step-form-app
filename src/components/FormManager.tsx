import { FormContext, useFormContext } from "../contexts/FormContext";
import { FORM_STEP_LIST } from "../data";
import ConfirmationSection from "./ConfirmationSection";
import FormStep from "./formStep/FormStep";
import ProgressNavigatorSection from "./progressIndicator/ProgressNavigatorSection";
import ProgressIndicatorSection from "./progressIndicator/ProgressIndicatorSection";
import Sidebar from "./Sidebar";

const FormManager = () => {
  const { form } = useFormContext(FormContext);
  return (
    <div className="bg-white shadow-xl shadow-neutral-light-gray rounded-2xl px-6 py-6 md:max-w-[960px] md:w-full ">
      <div className="flex flex-row  w-full ">
        {/** Sidebar desktop*/}
        <div className="relative hidden md:flex basis-1/3 rounded-xl h-full">
          {/** Sidebar image */}
          <Sidebar />
          {/** Progress indicator section */}
          <div className="absolute top-10 left-10">
            <ProgressIndicatorSection />
          </div>
        </div>
        <div className="md:px-20 md:basis-2/3 w-full flex flex-col">
          <div className="md:flex md:flex-col w-full md:mt-12">
            {/** Form content */}
            {form.completed ? (
              <ConfirmationSection />
            ) : (
              FORM_STEP_LIST.map(
                (formStep, index) =>
                  form.stepIndex === index && (
                    <FormStep key={index} data={formStep} />
                  )
              )
            )}
          </div>
          {/** Progress navigator section desktop*/}
          <div className="hidden md:flex w-full md:mt-auto">
            <ProgressNavigatorSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormManager;
