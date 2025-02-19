import PersonalInfoFormStep from "./components/formStep/PersonalInfoFormStep";
import { AddOn, FormStepData, Plan } from "./types";
import ArcadeIcon from "./assets/images/icon-arcade.svg";
import AdvancedIcon from "./assets/images/icon-advanced.svg";
import ProIcon from "./assets/images/icon-pro.svg";
import PlanFormStep from "./components/formStep/PlanFormStep";
import AddOnFormStep from "./components/formStep/AddOnFormStep";

export const ARCADE_PLAN: Plan = {
  id: "1",
  name: "Arcade",
  image: {
    src: ArcadeIcon,
    alt: "Arcade icon",
  },
  monthlyPrice: 9,
  yearlyPrice: 90,
  yearlyPriceSavings: "2 months free",
};

const ADVANCED_PLAN: Plan = {
  id: "2",
  name: "Advanced",
  image: {
    src: AdvancedIcon,
    alt: "Advanced icon",
  },
  monthlyPrice: 12,
  yearlyPrice: 120,
  yearlyPriceSavings: "2 months free",
};

const PRO_PLAN: Plan = {
  id: "3",
  name: "Pro",
  image: { src: ProIcon, alt: "Pro icon" },
  monthlyPrice: 15,
  yearlyPrice: 150,
  yearlyPriceSavings: "2 months free",
};

export const PLAN_LIST: Plan[] = [ARCADE_PLAN, ADVANCED_PLAN, PRO_PLAN];

const ONLINE_SERVICE_ADD_ON: AddOn = {
  id: "1",
  name: "Online service",
  description: "Access to multiplayer games",
  monthlyPrice: 1,
  yearlyPrice: 10,
};

const LARGER_STORAGE_ADD_ON: AddOn = {
  id: "2",
  name: "Larger storage",
  description: "Extra 1TB of cloud save",
  monthlyPrice: 2,
  yearlyPrice: 20,
};

const CUSTOMIZABLE_PROFILE_ADD_ON: AddOn = {
  id: "3",
  name: "Customizable profile",
  description: "Custom theme on your profile",
  monthlyPrice: 2,
  yearlyPrice: 20,
};

export const ADD_ON_LIST: AddOn[] = [
  ONLINE_SERVICE_ADD_ON,
  LARGER_STORAGE_ADD_ON,
  CUSTOMIZABLE_PROFILE_ADD_ON,
];

export const PERSONAL_INFO_FORM_STEP: FormStepData = {
  title: "Personal info",
  description: "Please provide your name, email address, and phone number.",
  data: PersonalInfoFormStep,
};

export const PLAN_FORM_STEP: FormStepData = {
  title: "Select your plan",
  description: "You have the option of monthly or yearly billing",
  data: PlanFormStep,
};

export const ADD_ON_FORM_STEP: FormStepData = {
  title: "Pick add-ons",
  description: "Add-ons help enhance your gaming experience",
  data: AddOnFormStep,
};

export const SUMMARY_FORM_STEP: FormStepData = {
  title: "Finishing up",
  description: "Double-check everything looks OK before confirming.",
  data: AddOnFormStep,
};

export const FORM_STEP_LIST: FormStepData[] = [
  PERSONAL_INFO_FORM_STEP,
  PLAN_FORM_STEP,
  ADD_ON_FORM_STEP,
  SUMMARY_FORM_STEP,
];
