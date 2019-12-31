import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Artist } from "../api/artist";
import { Layout } from "../common-components/Layout/Layout";
import { ArtistSearchBox } from "../components/ArtistSearchBox/ArtistSearchBox";
import styles from "./index.module.scss";

const IndexPage: React.FC = () => {
  const [artist1, setArtist1] = useState({} as Artist);
  const [artist2, setArtist2] = useState({} as Artist);
  const router = useRouter();
  
  return (
    <Layout>
      <div className={styles.container}>
        <ArtistSearchBox
          value={artist1}
          onChange={setArtist1}
          placeholder="Search for an artist..."
          label="Artist 1"
          className={styles.artist}
        />
        <ArtistSearchBox
          value={artist2}
          onChange={setArtist2}
          placeholder="Search for another artist..."
          label="Artist 2"
          className={styles.artist}
        />
        <Fab
          color="primary"
          variant="extended"
          className={styles.searchButton}
          onClick={() => {
            router.push({
              pathname: "/collabs",
              query: {
                artist1: artist1.id,
                artist2: artist2.id,
              },
            });
          }}
        >
          <SearchIcon className={styles.searchIcon} />
          Find Collaborations
        </Fab>
      </div>
    </Layout>
  );
};

export default IndexPage;
