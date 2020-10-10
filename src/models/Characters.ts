export interface ICharacterBase {
  id: number;
  name: string;
  image: string;
}

export interface ICharacterItemList extends ICharacterBase {
  species: 'string';
}
