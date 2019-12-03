import React from "react";
import { H2 } from "../common-components/H2/H2";
import { Layout } from "../common-components/Layout/Layout";
import styles from "./index.module.scss";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <H2>
          who-collabed
        </H2>
      </div>
    </Layout>
  );
};

export default IndexPage;
