import React, { HTMLAttributes, useState } from "react";

import s from "./Checkbox.module.scss";
import { scales } from "../scales";
import classNames from "classnames";

interface CheckboxProps {
  checked?: boolean;
  scale?: scales;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  scale = "default",
  onChange,
  className,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  function handleCheck() {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    if (onChange) {
      onChange(newIsChecked);
    }
  }
  return (
    <>
      <span {...props} className={s.Checkbox} onClick={handleCheck}>
        <span
          className={classNames(
            s[scale],
            s.handle,
            isChecked ? s.active : "",
            className
          )}
        >
          <span className={s.check}>
            {isChecked && <div className={s.flag}></div>}
          </span>
        </span>
      </span>
    </>
  );
};
