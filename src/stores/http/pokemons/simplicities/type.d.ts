import { ComputedRef } from 'vue';

export declare type PokemonSimplicityData = {
    id: number;
    name: string;
};

export declare type PokemonSimplicityResponse = {
    hits: number;
    data: PokemonSimplicityData[];
};

export declare type State = {
    pokemonSimplicities: PokemonSimplicityResponse[];
};

export declare type Getter = {
    pokemonSimplicities: ComputedRef<PokemonSimplicityResponse[]>;
};

export declare type Action = {
    fetchAll: (lang: string) => Promise<void>;
};
