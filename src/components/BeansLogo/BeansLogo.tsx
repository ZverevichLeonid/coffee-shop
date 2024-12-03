import cls from "./BeansLogo.module.css";
import img from "../../assets/beans-logo.svg";
export const BeansLogo = () => {
  return (
    <div className={cls.logo}>
      <img src={img} alt="beans" />
    </div>
  );
};
