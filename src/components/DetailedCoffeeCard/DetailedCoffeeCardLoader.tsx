import { Loader } from "../Loader/Loader";
import cls from "./DetailedCoffeeCardLoader.module.css";

export const DetailedCoffeeCardLoader = () => {
  return (
    <div className={cls.wrapper}>
      <Loader />
    </div>
  );
};
