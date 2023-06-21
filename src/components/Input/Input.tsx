import React, { FC, InputHTMLAttributes } from "react";
import s from "./Input.module.scss";
import classNames from "classnames";
import { scales } from "../scales";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: "light" | "dark";
  scale?: scales;
}

export const Input: FC<InputProps> = ({
  scale = "default",
  theme = "light",
  ...props
}) => {
  return (
    <>
      <input className={classNames(s.Input, s[theme], s[scale])} {...props} />
    </>
  );
};
