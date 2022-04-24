import { AppGetterTree, PiniaCustomStateProperties } from 'pinia';
import { UnwrapRef } from 'vue';

export declare type RegionResponse = {
    id: number;
    name: string;
    displayName: string;
    relatedGameVersionGroups: {
        id: number;
        alias: string;
    }[];
};

export declare type RegionState = {
    _data: RegionResponse[];
};

export declare type RegionGetter = AppGetterTree<RegionState, { data: RegionResponse[] }>;

export declare type RegionAction = {
    fetchAll: (lang: string) => Promise<void>;
};
