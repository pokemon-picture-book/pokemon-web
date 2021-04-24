declare module 'types/pokemon/type' {
    export type PokemonTypeCode = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy';

    export type ATypeItem = {
        label?: string;
        code: PokemonTypeCode;
    }

    export type ATypeProps = {
        items: ATypeItem[];
    };
}