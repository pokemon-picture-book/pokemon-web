import { ComputedRef } from 'vue';
import { LanguageResponse } from '@/types/plugins/http/api/languages';

type Language = LanguageResponse;

export declare type State = {
    languages: Language[];
};

export declare type Getter = {
    languages: ComputedRef<Language[]>;
};

export declare type Action = {
    fetchAll: () => Promise<void>;
};
