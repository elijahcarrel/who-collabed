import { Artist } from "./artist";
import { Track } from "./track";

export interface CollabRequest {
  artist1: string;
  artist2: string;
}

export type NodeType = "track" | "artist";

// TODO(ecarrel): cleanup types.
export interface ArtistNode extends Node {
  type: "artist";
  object: Artist;
  tracks: TrackNode[] | string[];
}

export interface TrackNode extends Node {
  type: "track";
  object: Track;
  artists: ArtistNode[] | string[];
}

export interface Node {
  id: string;
  type: NodeType;
  object: Artist | Track;
  artists?: ArtistNode[] | string[];
  tracks?: TrackNode[] | string[];
}

export interface CollabGraph {
  nodes: Node[];
}

export interface CollabGraph {
  nodes: Node[];
}

export const NODE_TYPES: Record<string, NodeType> = {
  ARTIST: "artist",
  TRACK: "track",
};
