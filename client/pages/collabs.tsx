import React, { useMemo } from "react";
// @ts-ignore
import { Graph } from "react-d3-graph";
import { NODE_TYPES } from "../api/collab";
import { getMockCollabGraph } from "../api/mock/mock-collabs";
import { Layout } from "../common-components/Layout/Layout";
import { LoadingOverlay } from "../common-components/LoadingOverlay/LoadingOverlay";
import { useUrlQuery } from "../lib/utils";
import styles from "./index.module.scss";

const CollabsPage: React.FC = () => {
  const [urlQuery, urlQueryIsReady] = useUrlQuery();
  const { artist1, artist2 } = urlQuery;
  const collabGraph = useMemo(() => getMockCollabGraph({
    artist1: String(artist1),
    artist2: String(artist2),
  }), [artist1, artist2]);
  const [nodes, links] = useMemo(() => {
    const nodes: any[] = [];
    const links: any[] = [];
    collabGraph.nodes.forEach((nodeInfo) => {
      const { id, type, object, tracks } = nodeInfo;
      if (type === NODE_TYPES.ARTIST) {
        (tracks || []).forEach((track: any) => {
          links.push({ source: id, target: track });
        });
        nodes.push({
          id,
          symbolType: "square",
          label: object.name,
        });
      } else {
        nodes.push({
          id,
          symbolType: "triangle",
          label: object.name,
        });
      }
    });
    return [nodes, links];
  }, [collabGraph]);

  if (!urlQueryIsReady) {
    return <LoadingOverlay />;
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Graph
          id="collab-graph"
          config={{
            node: {
              labelProperty: "label",
            },
          }}
          data={{
            nodes,
            links,
          }}
        />
      </div>
    </Layout>
  );
};

export default CollabsPage;
