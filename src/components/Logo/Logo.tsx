import img from "../../assets/coffee-beans.svg";
import cls from "./Logo.module.css";

type Props = {
  color?: "black" | "white";
};

export const Logo = ({ color = "white" }: Props) => {
  return (
    <div className={cls.logo}>
      <img className={cls[color]} src={img} alt="logo" />
      Coffee house
    </div>
  );
};
