import { ComputedRef } from 'vue';

export declare type LanguageResponse = {
    id: number;
    name: string;
    labelName: string;
};

export declare type State = {
    languages: LanguageResponse[];
};

export declare type Getter = {
    languages: ComputedRef<LanguageResponse[]>;
};

export declare type Action = {
    fetchAll: () => Promise<void>;
};
