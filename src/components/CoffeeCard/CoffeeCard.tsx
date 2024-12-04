import { IMG_BASE_URL } from "../../utils/constants";
import { CoffeeCard as Props } from "../../utils/types";
import cls from "./CoffeeCard.module.css";

export const CoffeeCard = ({ country, image, name, price }: Props) => {
  return (
    <div className={cls.card}>
      <img
        className={cls.img}
        src={IMG_BASE_URL + image}
        alt="image coffee beans"
      />
      <span className={cls.name}>{name}</span>
      <span className={cls.country}>{country}</span>
      <span className={cls.price}>{price}$</span>
    </div>
  );
};
