import React from 'react';
import useSWR from 'swr';
import { get } from '../utils/fetcher';
import { settings } from '../utils/settings';
import { NamesList } from './NamesList';

export const PokemonNamesList = (): JSX.Element => {
  const [urlToFetch, setUrlToFetch] = React.useState(`${settings.restApi}/pokemon`);
  const pokemonNames = React.useRef<string[]>([]);
  let { data, error } = useSWR<IAllPokemonApiInfo>(urlToFetch, get);

  if (error) return <div>Error!</div>;

  if (data) {
    pokemonNames.current = data.results.map((info) => info.name);
  }

  const onPressPrev = (): void => {
    if (data?.previous) {
      setUrlToFetch(data.previous);
    }
  };

  const onPressNext = (): void => {
    if (data?.next) {
      setUrlToFetch(data.next);
    }
  };

  return (
    <>
      <h1>Pokemon names list</h1>
      <NamesList names={pokemonNames.current} />
      <div>
        <button onClick={onPressPrev} disabled={!data?.previous}>
          Prev
        </button>
        <button onClick={onPressNext} disabled={!data?.next}>
          Next
        </button>
      </div>
    </>
  );
};
