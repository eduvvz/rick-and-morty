import { ICharacterBase } from './Characters';

export interface IEpisode {
  id: number;
  name: string;
  episode: string;
  characters: ICharacterBase[];
}
