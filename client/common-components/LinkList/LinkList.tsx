import classNames from "classnames";
import React, { Fragment, ReactNode } from "react";
import { CommonLink } from "../CommonLink/CommonLink";
import styles from "./LinkList.module.scss";

interface Props {
  classes?: {
    container?: string;
    list?: string;
    element?: string;
  };
  elements: Array<{
    key: string,
    href?: string;
    content: ReactNode;
    className?: string;
    onClick?: () => any;
    linkProps?: Object;
  }>;
  wrapWidth: "wide" | "medium" | "none";
}

export const LinkList = (props: Props) => {
  const { classes = {}, elements, wrapWidth = "wide", } = props;
  const wrapStyles = {
    none: styles.wrapNone,
    medium: styles.wrapMedium,
    wide: styles.wrapWide,
  };
  const wrapStyle = wrapStyles[wrapWidth];
  if (wrapStyle == null) {
    throw new Error("Invalid wrap width.");
  }
  return (
    <div className={classNames(styles.flexList, classes.container)}>
      <ul className={classNames(classes.list, wrapStyle)}>
        {elements.map(({ href, content, className, key, onClick, linkProps = {} }) => (
          <li
            className={classNames(className, classes.element, wrapStyle)}
            key={key}
          >
            {href || onClick ? (
                <CommonLink
                  href={href}
                  onClick={onClick}
                  {...linkProps}
                >
                  {content}
                </CommonLink>
              ) : (
                <Fragment>
                  {content}
                </Fragment>
              )
            }
          </li>
          ))}
      </ul>
    </div>
  );
};
