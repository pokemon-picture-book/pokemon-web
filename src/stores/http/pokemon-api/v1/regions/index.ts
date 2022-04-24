import { acceptHMRUpdate, defineStore } from 'pinia';
import http from '@/plugins/http';
import {
    RegionAction,
    RegionGetter,
    RegionResponse,
    RegionState
} from '@/stores/http/pokemon-api/v1/regions/type';

export const useRegionStore = defineStore<string, RegionState, RegionGetter, RegionAction>({
    id: 'pokemon-api/v1/regions',

    state: () => ({
        _data: []
    }),

    getters: {
        /**
         * @returns {RegionResponse[]}
         */
        data: (state) => state._data
    },

    actions: {
        /**
         * Region 一覧取得.
         */
        async fetchAll(lang) {
            const { data } = await http
                .get<RegionResponse[]>('regions', { params: { lang } })
                .catch((err) => {
                    throw err;
                });
            this._data = data || [];
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useRegionStore, import.meta.hot));
}
