import { API_BASE_URL } from "./constants";

export async function getBestCoffee() {
  try {
    const response = await fetch(API_BASE_URL + "/bestcoffee");
    if (!response.ok) return [];
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCoffee(name = "", country = "") {
  try {
    const response = await fetch(
      API_BASE_URL + `/coffee?country=${country}&name=${name}`
    );
    if (!response.ok) return [];
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
