import Fuse from "fuse.js";
import { Artist } from "../artist";

const mockArtists = [
  {
    id: "MILEY_CYRUS",
    name: "Miley Cyrus",
  },
  {
    id: "HANNAH_MONTANA",
    name: "Hannah Montana",
  },
  {
    id: "ASHLEY_O",
    name: "Ashley O",
  },
];

const fuseOptions = {
  keys: ["name"],
};

export const getMockArtists = async (query: string): Promise<Artist[]> => {
  if (query === "") {
    return [];
  }
  return new Fuse(mockArtists, fuseOptions).search(query);
};
