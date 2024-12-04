import { IMG_BASE_URL } from "../../utils/constants";
import { CoffeeCard } from "../../utils/types";
import { BeansLogo } from "../BeansLogo/BeansLogo";
import { motion } from "motion/react";
import cls from "./DetailedCoffeeCard.module.css";
import {
  CARDS_CONTAINER_CONFIG,
  DETAILED_CARD_CONFIG,
} from "../../utils/animation_config";

export const DetailedCoffeeCard = ({
  description,
  image,
  price,
  country,
  name,
}: CoffeeCard) => {
  return (
    <section>
      <div className={cls.card}>
        <img
          className={cls.img}
          src={IMG_BASE_URL + image}
          alt="coffee image"
        />
        <div className={cls.text}>
          <h2 className={cls.title}>About it</h2>
          <div className={cls.wrapper}>
            <BeansLogo color="black" />
          </div>
          <motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"
            variants={CARDS_CONTAINER_CONFIG}
            className={cls.animationWrapper}
          >
            <motion.p variants={DETAILED_CARD_CONFIG} className={cls.info}>
              <span>Name: </span>
              {name}
            </motion.p>
            <motion.p variants={DETAILED_CARD_CONFIG} className={cls.info}>
              <span>Country: </span>
              {country}
            </motion.p>
            <motion.p variants={DETAILED_CARD_CONFIG} className={cls.info}>
              <span>Description: </span>
              {description}
            </motion.p>
            <motion.p variants={DETAILED_CARD_CONFIG} className={cls.info}>
              <span>Price: </span>
              <span className={cls.price}>{price}$</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
