import { ComputedRef } from 'vue';

export declare type RegionResponse = {
    id: number;
    name: string;
    displayName: string;
    relatedGameVersionGroups: {
        id: number;
        alias: string;
    }[];
};

export declare type State = {
    regions: RegionResponse[];
};

export declare type Getter = {
    regions: ComputedRef<RegionResponse[]>;
};

export declare type Action = {
    fetchAll: (lang: string) => Promise<void>;
};
