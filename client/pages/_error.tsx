import React from "react";
import { Layout } from "../common-components/Layout/Layout";
import { defaultErrorAction } from "../lib/utils";

interface Props {
  statusCode: number;
}

const Error = (props: Props) => {
  const { statusCode } = props;
  if (statusCode === 404) {
    return (
      <Layout title="404 Error" error="This page does not exist." errorAction={defaultErrorAction} />
    );
  }
  return (
    <Layout title="Error" error="An unknown error occurred." errorAction={defaultErrorAction} />
  );
};

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
