import { useEffect, useState } from "react";
import cls from "./BestCoffeeCards.module.css";
import { getBestCoffee } from "../../utils/getData";
import { BestCoffeeCards as BestCoffeeCardsType } from "../../utils/types";
import { BestCoffeeCard } from "../BestCoffeeCard/BestCoffeeCard";

export const BestCoffeeCards = () => {
  const [cards, setCards] = useState<BestCoffeeCardsType>([]);
  useEffect(() => {
    async function setData() {
      const cards = await getBestCoffee();
      setCards(cards);
    }
    setData();
  }, []);
  // loader
  return (
    cards.length > 0 && (
      <div className={cls.cards}>
        {cards.map((card) => {
          return (
            <BestCoffeeCard
              id={card.id}
              image={card.image}
              name={card.name}
              price={card.price}
              key={card.id}
            />
          );
        })}
      </div>
    )
  );
};
