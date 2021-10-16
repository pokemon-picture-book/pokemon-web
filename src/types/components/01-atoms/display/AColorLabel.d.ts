export declare type ColorCode =
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy';

export declare type AColorLabelItem = {
    label?: string;
    code: ColorCode;
};

export declare type AColorLabelProps = {
    items: AColorLabelItem[];
};
