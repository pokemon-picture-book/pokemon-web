import { computed, InjectionKey, reactive } from 'vue';
import http from '@/plugins/http';
import { LanguageResponse } from '@/types/plugins/http/api/languages';
import { State, Getter, Action } from '@/types/stores/master/language';

export const languageState = () => {
    const state: State = reactive({
        languages: []
    });

    const getter: Getter = {
        languages: computed(() => state.languages)
    };

    const action: Action = {
        fetchAll: async () => {
            const { data } = await http.get<LanguageResponse[]>('languages').catch((err) => {
                throw err;
            });
            state.languages = data;
        }
    };

    return {
        state,
        getter,
        action
    };
};

export type LanguageStateType = ReturnType<typeof languageState>;
export const LanguageStateKey: InjectionKey<LanguageStateType> = Symbol('LanguageState');

export default {};
