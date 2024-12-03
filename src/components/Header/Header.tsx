import { Logo } from "../Logo/Logo";
import cls from "./Header.module.css";

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className="container">
        <nav className={cls.headerNav}>
          <Logo />
          <span>Our Coffee</span>
        </nav>
      </div>
    </header>
  );
};
