import { defineStore, acceptHMRUpdate, _GettersTree } from 'pinia';
import http from '@/plugins/http';
import {
    GameVersionGroupResponse,
    GameVersionGroupState,
    GameVersionGroupGetter,
    GameVersionGroupAction
} from '@/stores/http/pokemon-api/v1/game-version-groups/type';

export const useGameVersionGroupStore = defineStore<
    string,
    GameVersionGroupState,
    GameVersionGroupGetter,
    GameVersionGroupAction
>({
    id: 'pokemon-api/v1/game-version-groups',

    state: () => ({
        _data: []
    }),

    getters: {
        /**
         * @returns {GameVersionGroupResponse[]}
         */
        data: (state) => state._data
    },

    actions: {
        /**
         * GameVersionGroup 一覧取得.
         * @param {string} lang
         * @param {boolean} supported
         */
        async fetchAll(lang, supported) {
            const { data } = await http
                .get<GameVersionGroupResponse[]>('game-version-groups', {
                    params: { lang, supported }
                })
                .catch((err) => {
                    throw err;
                });
            this._data = data || [];
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGameVersionGroupStore, import.meta.hot));
}
