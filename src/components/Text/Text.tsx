import React, { FC, ReactNode, HTMLAttributes } from "react";
import s from "./Text.module.scss";
import { scales } from "../scales";
import classNames from "classnames";

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  scale?: scales;
  view?: "underline" | "through-line" | "default";
}

export const Text: FC<TextProps> = ({
  children,
  view = "default",
  scale = "default",
  ...props
}) => {
  return (
    <>
      <span {...props} className={classNames(s.Text, s[scale], s[view])}>
        {children}
      </span>
    </>
  );
};
