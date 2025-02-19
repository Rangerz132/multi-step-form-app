import { CycleContext, useCycleContext } from "../contexts/CycleContext";
import ToggleButton from "./UI/button/ToggleButton";

const CycleSection = () => {
  const { cycle, setCycle } = useCycleContext(CycleContext);

  function handleToggleButtonClick() {
    setCycle((prevState) => (prevState === "Monthly" ? "Yearly" : "Monthly"));
  }

  return (
    <div className="flex flex-row w-full items-center justify-center space-x-4 p-4 bg-neutral-magnolay rounded-lg ">
      <div
        className={`transition-all duration-200 ${
          cycle === "Monthly"
            ? "text-primary-marine-blue"
            : "text-neutral-cool-gray"
        }`}
      >
        Monthly
      </div>
      <ToggleButton
        onClick={handleToggleButtonClick}
        activated={cycle === "Yearly"}
      />
      <div
        className={`transition-all duration-200  ${
          cycle === "Yearly"
            ? "text-primary-marine-blue"
            : "text-neutral-cool-gray"
        }`}
      >
        Yearly
      </div>
    </div>
  );
};

export default CycleSection;
