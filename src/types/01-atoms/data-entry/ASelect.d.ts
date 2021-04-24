declare module 'types/date-entry/select' {
    import { Color, Size } from "@/types/common/index.d";

    export type ASelectItem = {
        id: number;
        label: string;
        value: number | string;
    };

    export type ASelectProps = {
        items: ASelectItem[];
        source?: ASelectItem;
        defaultValue?: ASelectItem;
        color: Color;
        size: Size;
    };
}