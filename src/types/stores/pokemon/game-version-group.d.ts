import { ComputedRef } from 'vue';
import { GameVersionGroupResponse } from '@/types/plugins/http/api/game-version-groups';

type GameVersionGroup = GameVersionGroupResponse;

export declare type State = {
    gameVersionGroups: GameVersionGroup[];
    selectedAlias: GameVersionGroup['alias'];
};

export declare type Getter = {
    gameVersionGroups: ComputedRef<GameVersionGroup[]>;
};

export declare type Action = {
    fetchAll: (lang: string, supported: boolean) => Promise<void>;
    saveSelectedAlias: (selectedAlias: GameVersionGroup['alias']) => void;
};
