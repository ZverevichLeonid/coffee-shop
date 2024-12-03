import { IMG_BASE_URL } from "../../utils/constants";
import { BestCoffeeCard as Props } from "../../utils/types";
import cls from "./BestCoffeeCard.module.css";

export const BestCoffeeCard = ({ name, price, image }: Props) => {
  return (
    <div className={cls.card}>
      <img
        className={cls.img}
        src={`${IMG_BASE_URL}${image}`}
        alt="coffee image"
      />
      <span className={cls.name}>{name}</span>
      <span className={cls.price}>{price}$</span>
    </div>
  );
};
