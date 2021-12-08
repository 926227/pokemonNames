interface IPokemonInfo {
  name: string;
  url: string;
}

interface IAllPokemonApiInfo {
  count: number;
  next: string;
  previous: string;
  results: IPokemonInfo[];
}
