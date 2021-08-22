import { ComputedRef } from 'vue';
import { PokemonResponse } from '@/types/plugins/http/api/pokemons';

type Pokemon = PokemonResponse;

export declare type State = {
    hits: number;
    pokemons: Pokemon['data'];
};

export declare type Getter = {
    hits: ComputedRef<number>;
    pokemons: ComputedRef<Pokemon['data']>;
};

export declare type Action = {
    fetchAll: (lang: string, game: string, regions: string[]) => Promise<void>;
};
