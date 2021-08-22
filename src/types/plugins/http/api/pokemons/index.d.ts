export declare type PokemonResponseData = {
    id: number;
    imageColor: string;
    name: string;
    gameImagePath: {
        mainPath: string;
        otherPaths: string[];
    };
    types: { code: string; name: string }[];
};

export declare type PokemonResponse = {
    hits: number;
    data: PokemonResponseData[];
};
