import { AppGetterTree, PiniaCustomStateProperties } from 'pinia';
import { UnwrapRef } from 'vue';

type PokemonType = {
    code: string;
    name: string;
};

type EvolutionPokemonDetail = {
    id: number;
    imageColor: string;
    pokemonName: string;
    gameImagePath: string;
    types: PokemonType[];
};

type DetailOne = {
    min_level?: number;
    min_happiness?: number;
    item?: { name: string };
    held_item?: { name: string };
    location?: { name: string };
    known_move?: { name: string };
    known_move_type?: { name: string };
    party_species?: { name: string };
    gender?: number;
};

type DetailTwo = {
    time_of_day?: string;
    relative_physical_stats?: number;
    min_affection?: number;
    item?: { name: string };
    min_level?: number;
    party_type?: { name: string };
    turn_upside_down?: boolean;
    needs_overworld_rain?: boolean;
};

export declare type PokemonDetailResponseData = {
    id: number;
    height: number;
    weight: number;
    imageColor: string;
    flavorText: string;
    genus: string;
    pokemonName: string;
    types: PokemonType[];
    image: {
        mainGameImage: string;
        footmarkImages: string[];
        handheldIconImages: string[];
        shinyImages: string[];
        otherImages: string[];
    };
    evolutions: {
        trigger: string;
        detail1: DetailOne;
        detail2: DetailTwo;
        fromPokemon: EvolutionPokemonDetail;
        toPokemon: EvolutionPokemonDetail;
    }[];
    status: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
};

export declare type PokemonDetailResponse = {
    prevId: number;
    nextId: number;
    data: PokemonDetailResponseData;
};

export declare type PokemonDetailState = {
    _prevId: number;
    _nextId: number;
    _data: PokemonDetailResponseData | null;
};

export declare type PokemonDetailGetter = AppGetterTree<
    PokemonDetailState,
    { prevId: number; nextId: number; data: PokemonDetailResponseData | null }
>;

export declare type PokemonDetailAction = {
    fetch: (id: number, lang: string, game: string, regions: string[]) => Promise<void>;
    reset: () => void;
};
