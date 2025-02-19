export type User = {
  info: UserInfo;
  plan: Plan;
  addOns: AddOn[];
};

export type UserInfo = {
  name: string;
  email: string;
  phoneNumber: number;
};

export type Plan = {
  id: string;
  name: string;
  image: Image;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyPriceSavings: string;
};

export type Image = {
  src: string;
  alt: string;
};

export type AddOn = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export type FormStepData = {
  title: string;
  description: string;
  data: any;
};
