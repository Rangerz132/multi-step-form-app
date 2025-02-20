import { createContext, useContext, useState } from "react";
import { FormStepData } from "../types";
import { FORM_STEP_LIST } from "../data";

type FormContextProviderProps = {
  children: React.ReactNode;
};

type Form = {
  steps: FormStepData[];
  stepIndex: number;
  completed: boolean;
  errors: { [key: string]: string };
  isValid: boolean;
};

type FormContext = {
  form: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
};

export const FormContext = createContext<FormContext | null>(null);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [form, setForm] = useState<Form>({
    stepIndex: 0,
    completed: false,
    steps: FORM_STEP_LIST,
    errors: {},
    isValid: false,
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext(formContext: React.Context<FormContext | null>) {
  const context = useContext(formContext);

  if (!context) {
    throw new Error("useFormContext has to be within FormContextProvider...");
  } else {
    return context;
  }
}
