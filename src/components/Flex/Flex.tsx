import React, { FC, ReactNode, HTMLAttributes } from "react";
import s from "./Flex.module.scss";
import classNames from "classnames";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  clns?: clnsT[];
}

export const Flex: FC<FlexProps> = ({ children, clns, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={classNames(
          s.Flex,
          clns && clns.map((cln) => s[cln] && s[cln])
        )}
      >
        {children}
      </div>
    </>
  );
};
type clnsT =
  | "jcc"
  | "jcs"
  | "jce"
  | "jcb"
  | "fdc"
  | "fdr"
  | "fdrr"
  | "fdcr"
  | "ais"
  | "aic"
  | "aie";
