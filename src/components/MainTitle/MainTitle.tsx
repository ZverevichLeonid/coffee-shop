import { BeansLogo } from "../BeansLogo/BeansLogo";
import { Button } from "../Button/Button";
import cls from "./MainTitle.module.css";

export const MainTitle = () => {
  return (
    <section className={cls.main}>
      <div className="container">
        <div className={cls.text}>
          <h1 className={cls.title}>Everything You Love About Coffee</h1>
          <BeansLogo />
          <p className={cls.desc}>
            We makes every day full of energy and taste
          </p>
          <p className={cls.subDesc}>Want to try our beans?</p>
          <Button>More</Button>
        </div>
      </div>
    </section>
  );
};
