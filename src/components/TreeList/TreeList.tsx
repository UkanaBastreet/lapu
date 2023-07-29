import React, { FC, ReactNode } from "react";
import s from "./TreeList.module.scss";

interface TreeListProps {
  children: ReactNode;
  decoration?: "dot" | "plus" | "tree";
}

export const TreeList: FC<TreeListProps> = ({
  children,
  decoration = "tree",
  ...props
}) => {
  return (
    <>
      <div {...props} className={s.TreeList}>
        {children}
      </div>
    </>
  );
};

interface TreeItemProps {
  children?: ReactNode;
}
export const TreeItem: FC<TreeItemProps> = ({ children }) => {
  return (
    <>
      <span className={s.TreeItem}>{children}</span>
    </>
  );
};
