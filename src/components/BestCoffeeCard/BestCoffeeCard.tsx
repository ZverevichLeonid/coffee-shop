import { Link } from "react-router";
import { IMG_BASE_URL } from "../../utils/constants";
import { BestCoffeeCard as Props } from "../../utils/types";
import { motion } from "motion/react";
import { CARD_CONFIG } from "../../utils/animation_config";
import cls from "./BestCoffeeCard.module.css";

export const BestCoffeeCard = ({ name, price, image, id }: Props) => {
  return (
    <motion.div variants={CARD_CONFIG}>
      <Link className={cls.link} to={`/our-coffee/${id}`}>
        <motion.div
          transition={{
            duration: 0.1,
          }}
          whileHover={{
            y: -20,
            backgroundColor: "rgba(255, 255, 255, 1)",
            transition: { ease: "linear", duration: 0.1 },
          }}
          className={cls.card}
        >
          <img
            className={cls.img}
            src={`${IMG_BASE_URL}${image}`}
            alt="coffee image"
          />
          <span className={cls.name}>{name}</span>
          <span className={cls.price}>{price}$</span>
        </motion.div>
      </Link>
    </motion.div>
  );
};
