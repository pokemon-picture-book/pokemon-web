export type OPokemonEvolutionItem = {
    id: number;
    pokemonName: string;
    types: {
        code: string;
        label: string;
    }[];
    gameImagePath: string;
};
