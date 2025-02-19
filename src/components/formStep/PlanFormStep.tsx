import { PLAN_LIST } from "../../data";
import CycleSection from "../CycleSection";
import { CycleContext, useCycleContext } from "../../contexts/CycleContext";
import { UserContext, useUserContext } from "../../contexts/UserContext";
import { Plan } from "../../types";

const PlanFormStep = () => {
  const { user, setUser } = useUserContext(UserContext);
  const { cycle } = useCycleContext(CycleContext);

  function handlePlanClick(plan: Plan) {
    setUser({
      ...user,
      plan,
    });
  }

  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex flex-col space-y-4 w-full">
        {PLAN_LIST.map((plan, index) => (
          <div
            key={index}
            onClick={() => handlePlanClick(plan)}
            className={`flex flex-row items-center justify-items-start w-full border  p-3 rounded-lg space-x-3 cursor-pointer transition-all duration-200 ${
              plan === user.plan
                ? "border-primary-purplish-blue bg-neutral-magnolay"
                : "border-neutral-light-gray bg-white"
            }`}
          >
            <div>
              {/** Plan icon */}
              <img src={plan.image.src} alt={plan.image.alt} />
            </div>
            <div className="flex flex-col">
              {/** Plan name */}
              <div className="text-primary-marine-blue font-semibold">
                {plan.name}
              </div>
              {/** Plan price */}
              <div className="text-sm">
                $ {cycle === "Monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                {cycle === "Monthly" ? "/mo" : "/yr"}
              </div>
              {/** Plan price saving */}
              {cycle === "Yealy" && (
                <div className="text-sm text-primary-marine-blue">
                  {plan.yearlyPriceSavings}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <CycleSection />
    </div>
  );
};

export default PlanFormStep;
