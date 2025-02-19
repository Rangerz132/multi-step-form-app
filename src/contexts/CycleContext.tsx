import { createContext, useContext, useState } from "react";

type CycleContextProviderProps = {
  children: React.ReactNode;
};

type CycleContext = {
  cycle: Cycle;
  setCycle: React.Dispatch<React.SetStateAction<Cycle>>;
};

export type Cycle = "Monthly" | "Yearly";

export const CycleContext = createContext<CycleContext | null>(null);

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cycle, setCycle] = useState<Cycle>("Monthly");

  return (
    <CycleContext.Provider value={{ cycle, setCycle }}>
      {children}
    </CycleContext.Provider>
  );
}

export function useCycleContext(
  cycleContext: React.Context<CycleContext | null>
) {
  const context = useContext(cycleContext);

  if (!context) {
    throw new Error("useCycleContext has to be within CycleContextProvider...");
  } else {
    return context;
  }
}
