export async function getBestCoffee() {
  const response = await fetch(
    "https://674ee1c2bb559617b26d2048.mockapi.io/coffee/bestcoffee"
  );
  const data = response.json();
  return data;
}
