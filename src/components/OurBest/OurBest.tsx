import { BestCoffeeCards } from "../BestCoffeeCards/BestCoffeeCards";
import cls from "./OurBest.module.css";

export const OurBest = () => {
  return (
    <section className={cls.section}>
      <h3 className={cls.title}>Our Best</h3>
      <BestCoffeeCards />
    </section>
  );
};
