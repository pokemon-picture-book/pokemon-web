export declare type PokemonTypeCode = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy';

export declare type ATypeItem = {
    label?: string;
    code: PokemonTypeCode;
}

export declare type ATypeProps = {
    items: ATypeItem[];
};