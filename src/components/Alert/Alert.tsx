import React, { ReactNode } from "react";

import s from "./Alert.module.scss";

interface AlertProps {
  children?: ReactNode;
  description?: string;
  banner?: boolean;
  view?: "error" | "info" | "success" | "warning";
  title?: string;
  width?: string;
  cb?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  description,
  banner,
  view,
  title,
  width,
  cb,
  ...props
}) => {
  return (
    <>
      <span
        style={{ width: width }}
        className={[s.Alert, banner ? s.banner : "", view ? s[view] : s.info]
          .join(" ")
          .trim()}
      >
        {title && (
          <span onClick={cb} className={s.closeBtn}>
            ✕
          </span>
        )}
        {title && (
          <header>
            <b>{title}</b>
          </header>
        )}
        {children}
      </span>
    </>
  );
};
