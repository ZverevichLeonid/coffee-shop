import { BeansLogo } from "../BeansLogo/BeansLogo";
import cls from "./AboutOurBeans.module.css";
import img from "../../assets/about-our-beans.jpg";

export const AboutOurBeans = () => {
  return (
    <section>
      <div className="container">
        <div className={cls.wrapper}>
          <img src={img} alt="about our beans" />
          <div className={cls.text}>
            <h2 className={cls.title}>About our beans</h2>
            <div className={cls.logoWrapper}>
              <BeansLogo color="black" />
            </div>
            <span>
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </span>
            <p>
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions.
            </p>
            <p>
              As greatly removed calling pleased improve an. Last ask him cold
              feel met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
