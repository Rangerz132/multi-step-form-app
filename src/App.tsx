import FormManager from "./components/FormManager";
import ProgressIndicatorSection from "./components/progressIndicator/ProgressIndicatorSection";
import ProgressNavigatorSection from "./components/progressIndicator/ProgressNavigatorSection";
import Sidebar from "./components/Sidebar";
import { FormContext, useFormContext } from "./contexts/FormContext";

function App() {
  const { form } = useFormContext(FormContext);
  return (
    <div className="md:h-screen">
      {/** Mobile sidebar */}
      <div className="absolute -z-1 md:hidden">
        <Sidebar />
      </div>

      {/** Form manager*/}
      <div className="wrapper flex flex-col space-y-8 pt-8 md:space-y-0 md:pt-0 md:items-center">
        {/** Progress indicator section mobile */}
        <div className="flex md:hidden">
          <ProgressIndicatorSection />
        </div>
        <FormManager />
      </div>

      {/** Progress navigator section */}
      <div
        className={`bg-white w-full absolute left-0 bottom-0 py-4 wrapper md:hidden ${
          form.completed && "hidden"
        }`}
      >
        <ProgressNavigatorSection />
      </div>
    </div>
  );
}

export default App;
