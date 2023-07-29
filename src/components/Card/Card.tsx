import React, { FC, ReactNode, HTMLAttributes } from "react";
import s from "./Card.module.scss";
import classNames from "classnames";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return (
    <>
      <div {...props} className={classNames(s.Card)}>
        {children}
      </div>
    </>
  );
};
