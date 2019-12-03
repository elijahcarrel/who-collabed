import classNames from "classnames";
import React from "react";
import styles from "./P.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const P = (props: Props) => {
  const { children, className = "" } = props;
  return (
    <div className={classNames(styles.p, className)}>
      {children}
    </div>
  );
};
