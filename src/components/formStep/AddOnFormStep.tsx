import { ADD_ON_LIST } from "../../data";
import Checkbox from "../../assets/images/icon-checkmark.svg";
import { CycleContext, useCycleContext } from "../../contexts/CycleContext";

const AddOnFormStep = () => {
  const { cycle } = useCycleContext(CycleContext);

  return (
    <div className="flex flex-col space-y-4 w-full">
      {ADD_ON_LIST.map((addOn, index) => (
        <div
          key={index}
          className={`flex flex-row items-center justify-between w-full border border-neutral-light-gray bg-white p-3 rounded-lg space-x-3 cursor-pointer transition-all duration-200 `}
        >
          <div className="flex flex-row space-x-3 items-center ">
            {/** Checkbox */}
            <div className="bg-primary-purplish-blue w-5 h-5 rounded-md flex items-center justify-center">
              <img src={Checkbox} alt={"Checkbox"} />
            </div>
            <div className="flex flex-col">
              {/** Name */}
              <div className="text-primary-marine-blue font-bold">
                {addOn.name}
              </div>
              {/** Description */}
              <div className="text-sm">{addOn.description}</div>
            </div>
          </div>

          {/** Price */}
          <div className="text-sm text-primary-purplish-blue">
            +$
            {cycle === "Monthly"
              ? addOn.monthlyPrice + "/mo"
              : addOn.yearlyPrice + "/yr"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddOnFormStep;
