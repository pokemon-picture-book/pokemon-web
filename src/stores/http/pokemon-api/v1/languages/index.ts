import { defineStore, acceptHMRUpdate } from 'pinia';
import http from '@/plugins/http';
import {
    LanguageResponse,
    LanguageState,
    LanguageGetter,
    LanguageAction
} from '@/stores/http/pokemon-api/v1/languages/type';

export const useLanguageStore = defineStore<string, LanguageState, LanguageGetter, LanguageAction>({
    id: 'pokemon-api/v1/languages',

    state: () => ({
        _data: []
    }),

    getters: {
        /**
         * @returns {LanguageResponse[]}
         */
        data: (state) => state._data
    },

    actions: {
        /**
         * Language 一覧取得.
         */
        async fetchAll() {
            const { data } = await http.get<LanguageResponse[]>('languages').catch((err) => {
                throw err;
            });
            this._data = data;
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLanguageStore, import.meta.hot));
}
