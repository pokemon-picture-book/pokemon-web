export declare type OPokemonItem = {
    id: number;
    imageColor: string;
    name: string;
    gameImagePaths: string[];
    imagePaths: string[];
    types: { code: string }[];
};

export declare type OPokemonState = {
    items: OPokemonItem[];
    gameImagePathIndex: { [key: string]: number }
};
