import { Character } from './Characters';

export interface IEpisode {
  id: number;
  name: string;
  episoe: string;
  characters: Character[];
}
