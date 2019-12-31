import { v4 } from "uuid";
import { CollabGraph, CollabRequest, NODE_TYPES } from "../collab";

export const getMockCollabGraph = (_: CollabRequest): CollabGraph => {
  const ids = {
    beatGoesOn: v4(),
    fourMinutes: v4(),
    madonna: v4(),
    justinTimberlake: v4(),
    kanyeWest: v4(),
  };

  return {
    nodes: [
      {
        type: NODE_TYPES.ARTIST,
        object: {
          id: ids.kanyeWest,
          name: "Kanye West",
        },
        id: ids.kanyeWest,
        tracks: [ids.beatGoesOn],
      },
      {
        type: NODE_TYPES.ARTIST,
        object: {
          id: ids.madonna,
          name: "Madonna",
        },
        id: ids.madonna,
        tracks: [ids.beatGoesOn, ids.fourMinutes],
      },
      {
        type: NODE_TYPES.ARTIST,
        object: {
          id: ids.justinTimberlake,
          name: "Justin Timberlake",
        },
        id: ids.justinTimberlake,
        tracks: [ids.fourMinutes],
      },
      {
        type: NODE_TYPES.TRACK,
        object: {
          id: ids.beatGoesOn,
          name: "Beat Goes On",
        },
        id: ids.beatGoesOn,
        artists: [ids.kanyeWest, ids.madonna],
      },
      {
        type: NODE_TYPES.TRACK,
        object: {
          id: ids.fourMinutes,
          name: "Four Minutes",
        },
        id: ids.fourMinutes,
        artists: [ids.madonna, ids.justinTimberlake],
      },
    ],
  };
};
