import { PiniaCustomStateProperties, AppGetterTree } from 'pinia';
import { UnwrapRef } from 'vue';

export declare type GameVersionGroupResponse = {
    id: number;
    alias: string;
    name: string;
    relatedRegions: {
        id: number;
        name: string;
    }[];
};

export declare type GameVersionGroupState = {
    _data: GameVersionGroupResponse[];
};

export type GameVersionGroupGetter = AppGetterTree<
    GameVersionGroupState,
    { data: GameVersionGroupResponse[] }
>;

export declare type GameVersionGroupAction = {
    fetchAll: (lang: string, supported: boolean) => Promise<void>;
};
