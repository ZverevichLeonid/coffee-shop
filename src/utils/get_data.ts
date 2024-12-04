import { API_BASE_URL } from "./constants";
import { BestCoffeeCards, CoffeeCard, CoffeeCards } from "./types";

export async function getBestCoffee(): Promise<[] | BestCoffeeCards> {
  try {
    const response = await fetch(API_BASE_URL + "/bestcoffee");
    if (!response.ok) return [];
    const data = await response.json();
    return data as BestCoffeeCards;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllCoffee(
  name = "",
  country = ""
): Promise<[] | CoffeeCards> {
  try {
    const response = await fetch(
      API_BASE_URL + `/coffee?country=${country}&name=${name}`
    );
    if (!response.ok) return [];
    const data = await response.json();
    return data as CoffeeCards;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCoffeeById(
  id: string
): Promise<undefined | CoffeeCard> {
  try {
    const response = await fetch(API_BASE_URL + `/coffee/${id}`);
    if (!response.ok) return undefined;
    const data = await response.json();
    return data as CoffeeCard;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
