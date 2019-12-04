import React from "react";
import { CommonLink } from "../common-components/CommonLink/CommonLink";
import { Layout } from "../common-components/Layout/Layout";
import { P } from "../common-components/P/P";
import styles from "./about.module.scss";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <P className={styles.p}>
          whocollabed was created by Katelyn Weingart and <CommonLink
          href="https://elijahcarrel.me/" isExternal>Elijah Carrel</CommonLink>.
        </P>
      </div>
    </Layout>
  );
};

export default AboutPage;
