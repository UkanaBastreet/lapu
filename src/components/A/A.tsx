import React, { FC, ReactNode, HTMLAttributes } from "react";
import s from "./A.module.scss";

interface AProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const A: FC<AProps> = ({ children, ...props }) => {
  return (
    <>
      <a {...props} className={s.A}>
        {children}
      </a>
    </>
  );
};
