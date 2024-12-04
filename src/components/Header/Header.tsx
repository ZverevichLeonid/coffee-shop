import { Link } from "react-router";
import { Logo } from "../Logo/Logo";
import cls from "./Header.module.css";

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className="container">
        <nav className={cls.headerNav}>
          <Link to={"/"}>
            <Logo />
          </Link>
          <Link to={"/our-coffee"}>
            <span>Our Coffee</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
