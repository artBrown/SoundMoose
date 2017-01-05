import {Track} from './track.model';

export interface Player {
  isPlaying: boolean;
  currentTrack: Track;
  volume: number;
}