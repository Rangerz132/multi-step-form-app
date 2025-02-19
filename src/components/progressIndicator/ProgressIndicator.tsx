import React from "react";
import { FormContext, useFormContext } from "../../contexts/FormContext";

const ProgressIndicator = (props: { index: number }) => {
  const { form } = useFormContext(FormContext);
  return (
    <div
      className={`rounded-full  border-1 border-white w-8 h-8 flex items-center justify-center transition-all duration-200 ${
        form === props.index
          ? "bg-primary-light-blue text-primary-marine-blue"
          : "bg-transparent text-white "
      }`}
    >
      {props.index + 1}
    </div>
  );
};

export default ProgressIndicator;
