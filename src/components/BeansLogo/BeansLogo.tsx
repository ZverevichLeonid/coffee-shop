import cls from "./BeansLogo.module.css";
import img from "../../assets/beans-logo.svg";

type Props = {
  color?: "black" | "white";
};

export const BeansLogo = ({ color = "white" }: Props) => {
  return (
    <div className={`${cls.logo} ${cls[color]}`}>
      <img src={img} alt="beans" />
    </div>
  );
};
