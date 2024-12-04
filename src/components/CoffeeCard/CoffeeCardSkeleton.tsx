import cls from "./CoffeeCardSkeleton.module.css";
export const CoffeeCardSkeleton = () => {
  return (
    <div className={`${cls.card}`}>
      <div className={`${cls.img} ${cls.skeleton}`}></div>
      <div className={`${cls.name} ${cls.skeleton}`}></div>
      <div className={`${cls.country} ${cls.skeleton}`}></div>
      <div className={`${cls.price} ${cls.skeleton}`}></div>
    </div>
  );
};
