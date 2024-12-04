import cls from "./Loader.module.css";
import img from "../../assets/source.gif";
export const Loader = () => {
  return (
    <div className={cls.loader}>
      <img src={img} alt="loader" />
    </div>
  );
};
