import classNames from "classnames";
import React from "react";
// @ts-ignore
import ScaleLoader from "react-spinners/ScaleLoader";
import styles from "./LoadingOverlay.module.scss";

interface Props {
  className?: string;
}

export const LoadingOverlay = (props: Props) => {
  const { className = "" } = props;
  return (
    <div className={classNames(className, styles.container)}>
      <ScaleLoader
        height={40}
        width={4}
        radius={2}
        margin="2px"
        color="#ece49e"
        loading={true}
        {...props}
      />
    </div>
  );
};
