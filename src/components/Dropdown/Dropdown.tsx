import React, { FC, ReactNode } from "react";
import { Button } from "../Button/Button";
import s from "./Dropdown.module.scss";
import { Card } from "../Card/Card";

interface DropdownProps {
  children: ReactNode;
  title: string;
  type?: "hover" | "click";
}

export const Dropdown: FC<DropdownProps> = ({ children, title }) => {
  return (
    <div className={s.Dropdown}>
      <Button>{title}</Button>
      {/* <Card className={s.DropdownList}>{children}</Card> */}
      <div className={s.DropdownList}>{children}</div>
    </div>
  );
};

interface DropdownItemProps {
  children: ReactNode;
}
export const DropdownItem: FC<DropdownItemProps> = ({ children }) => {
  return (
    <>
      <Button style={{ width: "100%" }} view="text">
        {children}
      </Button>
    </>
  );
};
