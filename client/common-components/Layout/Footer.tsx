import React from "react";
import { LinkList } from "../LinkList/LinkList";
import styles from "./Footer.module.scss";

interface Props {}

export const Footer: React.FC<Props> = () => (
  <footer className={styles.footer}>
    <nav className={styles.footerNav}>
      <LinkList
        elements={[
          {
            href: "/",
            key: "home",
            content: "Home",
          },
          {
            href: "/about",
            key: "about",
            content: "About",
          },
        ]}
        wrapWidth="wide"
      />
    </nav>
  </footer>
);
