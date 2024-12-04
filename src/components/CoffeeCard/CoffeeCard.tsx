import { Link } from "react-router";
import { IMG_BASE_URL } from "../../utils/constants";
import { CoffeeCard as Props } from "../../utils/types";
import cls from "./CoffeeCard.module.css";

export const CoffeeCard = ({ id, country, image, name, price }: Props) => {
  return (
    <Link className={cls.link} to={`/our-coffee/${id}`}>
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
    </Link>
  );
};
