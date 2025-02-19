import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UserContextProvider } from "./contexts/UserContext.tsx";
import { FormContextProvider } from "./contexts/FormContext.tsx";
import { CycleContextProvider } from "./contexts/CycleContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <FormContextProvider>
        <CycleContextProvider>
          <App />
        </CycleContextProvider>
      </FormContextProvider>
    </UserContextProvider>
  </StrictMode>
);
