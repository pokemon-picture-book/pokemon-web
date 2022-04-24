import { AppGetterTree, PiniaCustomStateProperties } from 'pinia';
import { UnwrapRef } from 'vue';

export declare type PokemonSimplicityData = {
    id: number;
    name: string;
};

export declare type PokemonSimplicityResponse = {
    hits: number;
    data: PokemonSimplicityData[];
};

export declare type PokemonSimplicityState = {
    _data: PokemonSimplicityResponse;
};

export declare type PokemonSimplicityGetter = AppGetterTree<
    PokemonSimplicityState,
    { data: PokemonSimplicityResponse }
>;

export declare type PokemonSimplicityAction = {
    fetchAll: (lang: string) => Promise<void>;
};
