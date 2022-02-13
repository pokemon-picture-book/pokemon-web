import { ComputedRef } from 'vue';

export declare type PokemonResponseData = {
    id: number;
    imageColor: string;
    name: string;
    gameImagePath: string;
    types: { code: string; name: string }[];
};

export declare type PokemonResponse = {
    hits: number;
    data: PokemonResponseData[];
};

export declare type State = {
    hits: number;
    pokemons: PokemonResponse['data'];
};

export declare type Getter = {
    hits: ComputedRef<number>;
    pokemons: ComputedRef<PokemonResponse['data']>;
};

export declare type Action = {
    fetchAll: (lang: string, game: string, regions: string[], page: number) => Promise<void>;
};
