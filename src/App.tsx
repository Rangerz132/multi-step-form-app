import FooterSection from "./components/FooterSection";
import FormManager from "./components/FormManager";
import ProgressIndicatorSection from "./components/progressIndicator/ProgressIndicatorSection";
import Sidebar from "./components/Sidebar";
import { CycleContextProvider } from "./contexts/CycleContext";
import { FormContextProvider } from "./contexts/FormContext";

function App() {
  return (
    <>
      <FormContextProvider>
        <CycleContextProvider>
          <div className="absolute -z-1">
            <Sidebar />
          </div>
          <div className="wrapper flex flex-col space-y-6 pt-6">
            <ProgressIndicatorSection />
            <FormManager />
          </div>

          <FooterSection />
        </CycleContextProvider>
      </FormContextProvider>
    </>
  );
}

export default App;
