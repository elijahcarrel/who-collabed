import Head from "next/head";
import React, { Fragment } from "react";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";
import { Footer } from "./Footer";
import styles from "./Layout.module.scss";
import {Header} from "./Header";

interface Props {
  title?: string;
  showTitle?: boolean;
  isLoading?: boolean;
  error?: string;
  errorAction?: React.ReactNode;
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = (props: Props) => {
  const {
    children,
    title,
    isLoading = false,
    error,
    errorAction = null,
  } = props;
  const siteTitle = "Who Collabed";
  const displayTitle = title ? `${siteTitle} | ${title}` : siteTitle;
  const description = "Find out the shortest distance between two artists, through collaborations alone";
  return (
    <Fragment>
      <Head>
        <title>{displayTitle}</title>
        <meta name="twitter:title" content={displayTitle} />
        <meta name="og:title" content={displayTitle} />
        <meta name="application-name" content={siteTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <Header />
          <div className={styles.content}>
            {error ?
              <Fragment>
                <div className={styles.error}>{error}</div>
                {errorAction}
              </Fragment>
                :
              <Fragment>
                {isLoading && <LoadingOverlay />}
                {!isLoading && (
                  <Fragment>
                    {children}
                  </Fragment>
                )}
              </Fragment>
            }
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};
