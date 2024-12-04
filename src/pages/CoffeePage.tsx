import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { OurCoffeeTitle } from "../components/OurCoffeeTitle/OurCoffeeTitle";
import { getCoffeeById } from "../utils/get_data";
import { useParams } from "react-router";
import { DetailedCoffeeCard } from "../components/DetailedCoffeeCard/DetailedCoffeeCard";
import { CoffeeCard } from "../utils/types";
import { Footer } from "../components/Footer/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import { DetailedCoffeeCardLoader } from "../components/DetailedCoffeeCard/DetailedCoffeeCardLoader";
import { NotFound } from "../components/NotFound/NotFound";

export const CoffeePage = () => {
  const { id } = useParams();
  const [coffeeData, setCoffeeData] = useState<CoffeeCard | undefined>();
  const [isLoading, setIsloading] = useState(true);
  const isEmpty = !coffeeData && !isLoading;

  useEffect(() => {
    async function setData() {
      const data = await getCoffeeById(id!);
      setCoffeeData(data);
      setTimeout(() => {
        // Только чтобы показать лоадер, иначе слишком быстро
        setIsloading(false);
      }, 1000);
    }
    setData();
  }, [id]);
  console.log(coffeeData);
  return (
    <>
      <ScrollToTop />
      <Header />
      <OurCoffeeTitle />
      {coffeeData && !isLoading && (
        <DetailedCoffeeCard
          id={coffeeData.id}
          name={coffeeData.name}
          description={coffeeData.description}
          image={coffeeData.image}
          price={coffeeData.price}
          country={coffeeData.country}
        />
      )}
      {isLoading && <DetailedCoffeeCardLoader />}
      {isEmpty && <NotFound />}

      <Footer />
    </>
  );
};
