export type User = {
  info: UserInfo;
  plan: Plan;
  addOn: AddOn;
};

export type UserInfo = {
  name: string;
  email: string;
  phoneNumber: number;
};

export type Plan = {
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
