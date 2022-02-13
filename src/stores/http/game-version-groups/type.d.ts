import { ComputedRef } from 'vue';

export declare type GameVersionGroupResponse = {
    id: number;
    alias: string;
    name: string;
    relatedRegions: {
        id: number;
        name: string;
    }[];
};

export declare type State = {
    gameVersionGroups: GameVersionGroupResponse[];
};

export declare type Getter = {
    gameVersionGroups: ComputedRef<GameVersionGroupResponse[]>;
};

export declare type Action = {
    fetchAll: (lang: string, supported: boolean) => Promise<void>;
};
