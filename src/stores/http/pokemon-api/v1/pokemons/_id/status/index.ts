import { acceptHMRUpdate, defineStore } from 'pinia';
import http from '@/plugins/http';
import {
    PokemonStatusAction,
    PokemonStatusGetter,
    PokemonStatusResponse,
    PokemonStatusState
} from '@/stores/http/pokemon-api/v1/pokemons/_id/status/type';

export const usePokemonStatusStore = defineStore<
    string,
    PokemonStatusState,
    PokemonStatusGetter,
    PokemonStatusAction
>({
    id: 'pokemon-api/v1/pokemons/_id/status',

    state: () => ({
        _data: null
    }),

    getters: {
        /**
         * @returns {PokemonStatusResponse | null}
         */
        data: (state) => state._data
    },

    actions: {
        /**
         * Pokemon status 情報取得.
         */
        async fetch(id, lang) {
            const { data } = await http
                .get<PokemonStatusResponse>(`pokemons/${id}/status`, {
                    params: { lang }
                })
                .catch((err) => {
                    throw err;
                });
            this._data = data;
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePokemonStatusStore, import.meta.hot));
}
