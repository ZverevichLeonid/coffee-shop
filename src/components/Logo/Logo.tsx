import img from "../../assets/coffee-beans.svg";
import cls from "./Logo.module.css";
export const Logo = () => {
  return (
    <div className={cls.logo}>
      <img src={img} alt="logo" />
      Coffee house
    </div>
  );
};
