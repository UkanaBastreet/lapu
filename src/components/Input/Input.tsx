import React, { FC, InputHTMLAttributes } from "react";
import s from "./Input.module.scss";
import classNames from "classnames";
import { scales } from "../scales";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: scales;
  view?: "Input" | "text";
}

export const Input: FC<InputProps> = ({
  scale = "default",
  view = "Input",
  width,
  ...props
}) => {
  return (
    <>
      <input
        style={{ width: width }}
        className={classNames(s.Input, s[scale], s[view])}
        {...props}
      />
    </>
  );
};
