import { useEffect, useState } from "react";
import cls from "./BestCoffeeCards.module.css";
import { getBestCoffee } from "../../utils/get_data";
import { BestCoffeeCards as BestCoffeeCardsType } from "../../utils/types";
import { BestCoffeeCard } from "../BestCoffeeCard/BestCoffeeCard";
import { motion } from "motion/react";
import { CARDS_CONTAINER_CONFIG } from "../../utils/animation_config";

export const BestCoffeeCards = () => {
  const [cards, setCards] = useState<BestCoffeeCardsType>([]);
  useEffect(() => {
    async function setData() {
      const cards = await getBestCoffee();
      setCards(cards);
    }
    setData();
  }, []);

  return (
    cards.length > 0 && (
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        variants={CARDS_CONTAINER_CONFIG}
        className={cls.cards}
      >
        {cards.map((card, index) => {
          return (
            <BestCoffeeCard
              key={index}
              id={card.id}
              image={card.image}
              name={card.name}
              price={card.price}
            />
          );
        })}
      </motion.div>
    )
  );
};
