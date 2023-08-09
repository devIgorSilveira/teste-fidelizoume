interface ISpritesInterface {
  front_default: string;
}

interface IStatsInterface {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface ITypeInterface {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemonInterface {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: ISpritesInterface;
  stats: IStatsInterface[];
  types: ITypeInterface[];
}

export interface IListOfPokemonsInterface {
  name: string;
  url: string;
}
