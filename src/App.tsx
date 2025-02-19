import FooterSection from "./components/FooterSection";
import FormManager from "./components/FormManager";
import ProgressIndicatorSection from "./components/progressIndicator/ProgressIndicatorSection";
import Sidebar from "./components/Sidebar";
import { CycleContextProvider } from "./contexts/CycleContext";
import { FormContextProvider } from "./contexts/FormContext";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <FormContextProvider>
          <CycleContextProvider>
            <div className="absolute -z-1">
              <Sidebar />
            </div>
            <div className="wrapper flex flex-col space-y-8 pt-8">
              <ProgressIndicatorSection />
              <FormManager />
            </div>

            <FooterSection />
          </CycleContextProvider>
        </FormContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
