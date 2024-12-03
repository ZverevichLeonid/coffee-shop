import { BeansLogo } from "../BeansLogo/BeansLogo";
import { Logo } from "../Logo/Logo";
import cls from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className="container">
        <nav className={cls.footerNav}>
          <Logo color="black" />
          <span>Our Coffee</span>
          <span>For your pleasure</span>
        </nav>
        <div className={cls.wrapper}>
          <BeansLogo color="black" />
        </div>
      </div>
    </footer>
  );
};
