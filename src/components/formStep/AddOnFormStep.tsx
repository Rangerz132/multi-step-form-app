import { ADD_ON_LIST } from "../../data";
import Checkbox from "../../assets/images/icon-checkmark.svg";
import { CycleContext, useCycleContext } from "../../contexts/CycleContext";
import { AddOn } from "../../types";
import { UserContext, useUserContext } from "../../contexts/UserContext";

const AddOnFormStep = () => {
  const { user, setUser } = useUserContext(UserContext);
  const { cycle } = useCycleContext(CycleContext);

  function handleAddOnClick(addOn: AddOn) {
    const tempPlans = user.addOns;

    if (user.addOns.includes(addOn)) {
      tempPlans.splice(tempPlans.indexOf(addOn), 1);
    } else {
      tempPlans.push(addOn);
    }

    setUser({
      ...user,
      addOns: tempPlans,
    });
  }

  return (
    <div className="flex flex-col space-y-4 w-full">
      {ADD_ON_LIST.map((addOn, index) => (
        <div
          key={index}
          onClick={() => handleAddOnClick(addOn)}
          className={`flex flex-row items-center justify-between w-full border p-3 rounded-lg space-x-3 cursor-pointer transition-all duration-200 ${
            user.addOns.includes(addOn)
              ? "border-primary-purplish-blue bg-neutral-magnolay"
              : "border-neutral-light-gray bg-white"
          }`}
        >
          <div className="flex flex-row space-x-3 items-center ">
            {/** Checkbox */}
            <div
              className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-200 ${
                user.addOns.includes(addOn)
                  ? "bg-primary-purplish-blue border-transparent"
                  : "bg-transparent border-neutral-light-gray"
              }`}
            >
              {user.addOns.includes(addOn) && (
                <img src={Checkbox} alt={"Checkbox"} />
              )}
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
