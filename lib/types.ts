export type Category = {
  name: string;
  blurb: string;
  hint: string;
};

export type Spec = [string, string];

export type Product = {
  code: string;
  name: string;
  category: string;
  meta: string;
  description: string;
  specs: Spec[];
};

export type Finish = {
  name: string;
  hex: string;
};

export type Dealer = {
  name: string;
  address: string;
  city: string;
  phone: string;
};

export type HowItWorksItem = {
  title: string;
  slot: string;
  text: string;
};

export type QuoteItem = {
  key: string;
  code: string;
  finish: string;
  qty: number;
};
