import { FORM_STEP_LIST } from "../../data";
import ProgressIndicator from "./ProgressIndicator";

const ProgressIndicatorSection = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full space-x-4 md:space-x-0 md:flex-col md:items-start md:space-y-6">
      {FORM_STEP_LIST.map((formStep, index) => (
        <ProgressIndicator key={index} index={index} />
      ))}
    </div>
  );
};

export default ProgressIndicatorSection;
