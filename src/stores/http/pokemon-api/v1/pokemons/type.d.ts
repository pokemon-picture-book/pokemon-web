import { AppGetterTree, PiniaCustomStateProperties } from 'pinia';
import { UnwrapRef } from 'vue';

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

export declare type PokemonState = {
    _hits: number;
    _data: PokemonResponse['data'];
};

export declare type PokemonGetter = AppGetterTree<
    PokemonState,
    { hits: number; data: PokemonResponse['data'] }
>;

export declare type PokemonAction = {
    fetchAll: (lang: string, game: string, regions: string[], page: number) => Promise<void>;
    reset: () => void;
};
