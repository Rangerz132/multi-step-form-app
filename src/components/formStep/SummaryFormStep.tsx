import React from "react";
import { UserContext, useUserContext } from "../../contexts/UserContext";
import { CycleContext, useCycleContext } from "../../contexts/CycleContext";

const SummaryFormStep = () => {
  const { user } = useUserContext(UserContext);
  const { cycle, setCycle } = useCycleContext(CycleContext);

  function handleChangeCycle() {
    setCycle((prevState) => (prevState === "Monthly" ? "Yearly" : "Monthly"));
  }

  function getTotal(): number {
    const plan =
      user.plan[cycle === "Monthly" ? "monthlyPrice" : "yearlyPrice"];

    const addOnsTotal = user.addOns.reduce(
      (acc, addOn) =>
        acc + addOn[cycle === "Monthly" ? "monthlyPrice" : "yearlyPrice"],
      0
    );

    return plan + addOnsTotal;
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="rounded-lg">
        <div className="bg-neutral-magnolay p-6 flex flex-col space-y-4 rounded-md">
          {/** Plan */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              {/** Plan name */}
              <div className="text-primary-marine-blue font-bold">
                {user.plan.name} ({cycle})
              </div>
              {/** Plan change */}
              <div
                onClick={() => handleChangeCycle()}
                className="underline text-sm cursor-pointer"
              >
                Change
              </div>
            </div>
            {/** Cycle */}
            <div className="text-primary-marine-blue font-bold">
              $
              {cycle === "Monthly"
                ? user.plan.monthlyPrice
                : user.plan.yearlyPrice}
              {cycle === "Monthly" ? "/mo" : "/yr"}
            </div>
          </div>
          {user.addOns.length > 0 && (
            <>
              <div className="w-full h-[0.5px] bg-neutral-light-gray"></div>
              {/** Add ons */}
              <div className="flex flex-col space-y-4">
                {user.addOns.map((addOn) => (
                  <div
                    key={addOn.id}
                    className="text-sm flex flex-row items-center justify-between"
                  >
                    <div>{addOn.name}</div>
                    <div className="text-primary-marine-blue">
                      +$
                      {cycle === "Monthly"
                        ? addOn.monthlyPrice
                        : addOn.yearlyPrice}
                      {cycle === "Monthly" ? "/mo" : "/yr"}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {/** Total */}
      <div className="flex flex-row items-center justify-between px-6">
        <div className="text-sm">
          Total ({cycle === "Monthly" ? "per month" : "per year"})
        </div>
        <div className="font-bold text-primary-purplish-blue">
          ${getTotal()}
          {cycle === "Monthly" ? "/mo" : "/yr"}
        </div>
      </div>
    </div>
  );
};

export default SummaryFormStep;
