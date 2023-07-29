import React, { ButtonHTMLAttributes } from "react";
import classnames from "classnames";
import { scales } from "../scales";
import s from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  scale?: scales;
  view?: "secondary" | "primary" | "danger" | "text" | "link";
  // dashed?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  scale = "default",
  view = "secondary",
  // dashed,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classnames(s.Button, s[scale], s[view], className)}
      {...props}
    >
      {children}
    </button>
  );
};
