import App from "next/app";
import React from "react";
import styles from "./app.module.scss";

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    // We need to reference styles.nothing somewhere to fix https://github.com/zeit/next-plugins/issues/282.
    return (
      <Component fakeProp={styles.nothing} {...pageProps} />
    );
  }
}

export default MyApp;
