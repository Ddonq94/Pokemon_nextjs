export interface IPokemon {
  name: string;
  url: string;
}

export interface IBaseList {
  count: number;
  next?: string;
  previous?: string;
  results?: IPokemon[];
}

export interface Sprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

export interface Pokemon {
  name: string;
  image: string;
  species: Species;
  stats: Stat[];
  types: Type[];
  weight: number;
  moves: Move[];
}

export interface BaseStat {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: BaseStat;
}

export interface BaseType {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: BaseType;
}

export interface Move {
  move: BaseMove;
}

export interface BaseMove {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}
