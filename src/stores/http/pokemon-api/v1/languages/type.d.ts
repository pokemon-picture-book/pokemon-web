import { AppGetterTree, PiniaCustomStateProperties } from 'pinia';
import { UnwrapRef } from 'vue';

export declare type LanguageResponse = {
    id: number;
    name: string;
    labelName: string;
};

export declare type LanguageState = {
    _data: LanguageResponse[];
};

export declare type LanguageGetter = AppGetterTree<LanguageState, { data: LanguageResponse[] }>;

export declare type LanguageAction = {
    fetchAll: () => Promise<void>;
};
