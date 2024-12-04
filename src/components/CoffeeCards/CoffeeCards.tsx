import { useEffect, useState } from "react";
import { getAllCoffee } from "../../utils/get_data";
import { CoffeeCards as CoffeeCardsType } from "../../utils/types";
import { CoffeeCard } from "../CoffeeCard/CoffeeCard";
import { CoffeeFilters } from "../CoffeeFilters/CoffeeFilters";
import { CoffeeCardSkeleton } from "../CoffeeCard/CoffeeCardSkeleton";
import { NotFound } from "../NotFound/NotFound";
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
      const data = await getAllCoffee(queryParams, activeFilter);
      setCards(data);
      setTimeout(() => {
        // Задержка чтобы показать заглушки
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
                  description={card.description}
                  name={card.name}
                  price={card.price}
                />
              );
            })}
          {isLoading &&
            skeletonCards.map((_, index) => {
              return <CoffeeCardSkeleton key={index} />;
            })}
        </div>
        {isEmpty && <NotFound />}
      </div>
    </section>
  );
};
