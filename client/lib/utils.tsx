import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CommonLink } from "../common-components/CommonLink/CommonLink";
import { H3 } from "../common-components/H3/H3";
import {ParsedUrlQuery} from "querystring";

export const defaultErrorAction = (
  <H3><CommonLink href="/">Go back to the home page.</CommonLink></H3>
);

export const useUrlQuery = (): [ParsedUrlQuery, boolean] => {
  const router = useRouter();
  const [queryIsReady, setQueryIsReady] = useState(false);
  const { query } = router;

  useEffect(() => {
    if (query != null && !queryIsReady) {
      setQueryIsReady(true);
    }
  }, [query, queryIsReady]);
  return [query, queryIsReady];
};
