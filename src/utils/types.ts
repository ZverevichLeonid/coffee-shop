export type BestCoffeeCard = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export type CoffeeCard = {
  id: string;
  name: string;
  price: string;
  image: string;
  country: string;
  description: string;
};

export type BestCoffeeCards = BestCoffeeCard[];
export type CoffeeCards = CoffeeCard[];
