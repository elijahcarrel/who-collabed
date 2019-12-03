import classNames from "classnames";
import React from "react";
import styles from "./Code.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Code = (props: Props) => {
  const { children, className = "" } = props;
  return (
    <span className={classNames(styles.code, className)}>
      {children}
    </span>
  );
};
