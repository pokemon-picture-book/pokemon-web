import { PiniaCustomStateProperties, AppGetterTree } from 'pinia';
import { UnwrapRef } from 'vue';

export declare type SearchPokemonParamState = {
    _language: string;
    _game: string;
    _regions: string[];
    _infiniteIndex: number;
};

export type SearchPokemonParamGetter = AppGetterTree<
    SearchPokemonParamState,
    {
        all: SearchPokemonParamState;
        language: string;
        game: string;
        regions: string[];
        infiniteIndex: number;
    }
>;

export declare type SearchPokemonParamAction = {
    setAll: (
        language: string | null,
        game: string | null,
        regions: string[] | null,
        infiniteIndex: number
    ) => void;
    setLanguage: (language: string | null) => void;
    setGame: (game: string | null) => void;
    setRegions: (regions: string[] | null) => void;
    setInfiniteIndex: (infiniteIndex: number) => void;
};
