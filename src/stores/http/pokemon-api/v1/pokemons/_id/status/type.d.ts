import { AppGetterTree, PiniaCustomStateProperties } from 'pinia';
import { UnwrapRef } from 'vue';

export declare type PokemonStatusResponse = {
    id: number;
    name: string;
    status: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
};

export declare type PokemonStatusState = {
    _data: PokemonStatusResponse | null;
};

export declare type PokemonStatusGetter = AppGetterTree<
    PokemonStatusState,
    { data: PokemonStatusResponse | null }
>;

export declare type PokemonStatusAction = {
    fetch: (id: number, lang: string) => Promise<void>;
};
