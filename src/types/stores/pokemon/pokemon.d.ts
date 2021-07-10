import { ComputedRef } from 'vue';
import { PokemonResponse } from '@/types/plugins/http/api/pokemons';

type Pokemon = PokemonResponse;

export declare type State = {
    pokemons: Pokemon[];
};

export declare type Getter = {
    pokemons: ComputedRef<Pokemon[]>;
};

export declare type Action = {
    fetchAll: (lang: string, game: string, regions: string[]) => Promise<void>;
};
