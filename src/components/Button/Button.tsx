import { ReactNode } from "react";
import cls from "./Button.module.css";

type Props = {
  children: ReactNode;
};

export const Button = ({ children }: Props) => {
  return <button className={cls.btn}>{children}</button>;
};
