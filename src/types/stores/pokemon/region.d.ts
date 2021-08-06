import { ComputedRef } from 'vue';
import { RegionResponse } from '@/types/plugins/http/api/regions';

type Region = RegionResponse;

export declare type State = {
    regions: Region[];
    selectedNames: Region['name'][];
};

export declare type Getter = {
    regions: ComputedRef<Region[]>;
};

export declare type Action = {
    fetchAll: (lang: string) => Promise<void>;
    saveSelectedNames: (selectedNames: Region['name'][]) => void;
};
