import { useEffect, useState } from "react";
import { getCoffee } from "../../utils/getData";
import { CoffeeCards as CoffeeCardsType } from "../../utils/types";
import { CoffeeCard } from "../CoffeeCard/CoffeeCard";
import { CoffeeFilters } from "../CoffeeFilters/CoffeeFilters";
import { CoffeeCardSkeleton } from "../CoffeeCard/CoffeeCardSkeleton";
import cls from "./CoffeeCards.module.css";

export const CoffeeCards = () => {
  const [cards, setCards] = useState<CoffeeCardsType>([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [queryParams, setQueryParams] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const isEmpty = !isLoading && cards.length === 0;
  const skeletonCards = new Array(9).fill(null);

  useEffect(() => {
    async function setData() {
      const data = await getCoffee(queryParams, activeFilter);
      setCards(data);
      setTimeout(() => {
        setIsloading(false);
      }, 1500);
    }
    setData();
  }, [queryParams, activeFilter]);

  return (
    <section className={cls.section}>
      <div className="container">
        <CoffeeFilters
          setQueryParams={setQueryParams}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <div className={cls.wrapper}>
          {!isLoading &&
            cards.map((card) => {
              return (
                <CoffeeCard
                  key={card.id}
                  id={card.id}
                  country={card.country}
                  image={card.image}
                  name={card.name}
                  price={card.price}
                />
              );
            })}
          {isLoading &&
            skeletonCards.map((_, index) => {
              return <CoffeeCardSkeleton key={index} />;
            })}
          {isEmpty && <span>The coffee list is empty</span>}
        </div>
      </div>
    </section>
  );
};
