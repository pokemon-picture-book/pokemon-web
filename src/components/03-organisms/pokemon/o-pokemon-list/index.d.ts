export declare type OPokemonData = {
    hits: number;
    items: OPokemonItem[];
};

export declare type OPokemonItem = {
    id: number;
    imageColor: string;
    name: string;
    gameImagePath: string;
    types: { code: string }[];
};

export declare type OPokemonState = {
    infiniteIndex: number;
};
