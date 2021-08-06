export declare type PokemonResponse = {
    id: number;
    imageColor: string;
    name: string;
    gameImagePath: {
        mainPath: string;
        otherPaths: string[];
    };
    imagePaths: string[];
    types: { code: string; name: string }[];
};
