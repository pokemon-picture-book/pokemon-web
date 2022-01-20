export type OPokemonDetailData = {
    mainImage: {
        src: string;
        alt: string;
    };
    subImage: {
        src: string;
        alt: string;
    };
    iconImage: {
        src: string;
        alt: string;
    };
    no: number;
    name: string;
    genus: string;
    types: {
        code: string;
        label: string;
    }[];
    height: number;
    weight: number;
    flavorText: string;
};
