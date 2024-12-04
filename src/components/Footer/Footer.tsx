import { Link } from "react-router";
import { BeansLogo } from "../BeansLogo/BeansLogo";
import { Logo } from "../Logo/Logo";
import cls from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className="container">
        <nav className={cls.footerNav}>
          <Link to={"/"}>
            <Logo color="black" />
          </Link>
          <Link to={"/our-coffee"}>
            <span>Our Coffee</span>
          </Link>
          <span>For your pleasure</span>
        </nav>
        <div className={cls.wrapper}>
          <BeansLogo color="black" />
        </div>
      </div>
    </footer>
  );
};
