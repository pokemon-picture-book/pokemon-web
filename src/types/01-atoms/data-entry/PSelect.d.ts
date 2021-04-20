declare module 'types/date-entry/select' {
    import { Color, Size } from "@/types/common/index.d";

    export type PSelectItem = {
        id: number;
        label: string;
        value: number | string;
    };

    export type PSelectProps = {
        items: PSelectItem[];
        source?: PSelectItem;
        defaultValue?: PSelectItem;
        color: Color;
        size: Size;
    };
}