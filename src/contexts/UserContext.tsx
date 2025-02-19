import { createContext, useContext, useState } from "react";
import { Plan, User } from "../types";
import { ARCADE_PLAN } from "../data";

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContext = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const UserContext = createContext<UserContext | null>(null);

const InitialUserContext: User = {
  info: {
    name: "",
    email: "",
    phoneNumber: 0,
  },
  plan: null as unknown as Plan,
  addOns: [],
};

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User>({
    ...InitialUserContext,
    plan: ARCADE_PLAN,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(userContext: React.Context<UserContext | null>) {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("UseUserContext has to be within UserContextProvider...");
  } else {
    return context;
  }
}
