import classNames from "classnames";
import React from "react";
// @ts-ignore
import PulseLoader from "react-spinners/PulseLoader";
import styles from "./LoadingOverlay.module.scss";

interface Props {
  className?: string;
}

export const LoadingOverlay = (props: Props) => {
  const { className = "" } = props;
  return (
    <div className={classNames(className, styles.container)}>
      <PulseLoader
        sizeUnit="px"
        size={30}
        color="#ece49e"
        loading={true}
        {...props}
      />
    </div>
  );
};
