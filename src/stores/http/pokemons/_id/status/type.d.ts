import { ComputedRef } from 'vue';

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

export declare type State = {
    pokemonStatus: PokemonStatusResponse | null;
};

export declare type Getter = {
    pokemonStatus: ComputedRef<PokemonStatusResponse | null>;
};

export declare type Action = {
    fetchAll: (id: number, lang: string) => Promise<void>;
};
