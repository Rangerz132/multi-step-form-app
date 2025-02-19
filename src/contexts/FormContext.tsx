import { createContext, useContext, useState } from "react";

type FormContextProviderProps = {
  children: React.ReactNode;
};


type FormContext = {
  form: number;
  setForm: React.Dispatch<React.SetStateAction<number>>;
};

export const FormContext = createContext<FormContext | null>(null);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [form, setForm] = useState<number>(0);

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
