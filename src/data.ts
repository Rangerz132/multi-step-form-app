import { AddOn, Plan } from "./types";

const ARCADE_PLAN: Plan = {
  name: "Arcade",
  monthPrice: 9,
};

const ADVANCED_PLAN: Plan = {
  name: "Advanced",
  monthPrice: 12,
};

const PRO_PLAN: Plan = {
  name: "Pro",
  monthPrice: 15,
};

export const PLAN_LIST: Plan[] = [ARCADE_PLAN, ADVANCED_PLAN, PRO_PLAN];

const ONLINE_SERVICE_ADD_ON: AddOn = {
  name: "Online service",
  description: "Access to multiplayer games",
  monthPrice: 1,
};

const LARGER_STORAGE_ADD_ON: AddOn = {
  name: "Larger storage",
  description: "Extra 1TB of cloud save",
  monthPrice: 2,
};

const CUSTOMIZABLE_PROFILE_ADD_ON: AddOn = {
  name: "Customizable profile",
  description: "Custom theme on your profile",
  monthPrice: 2,
};

export const ADD_ON_LIST: AddOn[] = [
  ONLINE_SERVICE_ADD_ON,
  LARGER_STORAGE_ADD_ON,
  CUSTOMIZABLE_PROFILE_ADD_ON,
];
