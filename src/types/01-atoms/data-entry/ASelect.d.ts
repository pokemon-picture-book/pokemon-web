import { Color, Size } from "@/types/common/index.d";

export declare type ASelectItem = {
    id: number;
    label: string;
    value: number | string;
};

export declare type ASelectProps = {
    items: ASelectItem[];
    source?: ASelectItem;
    color: Color;
    size: Size;
};