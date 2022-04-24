import { acceptHMRUpdate, defineStore } from 'pinia';
import http from '@/plugins/http';
import {
    PokemonDetailAction,
    PokemonDetailGetter,
    PokemonDetailResponse,
    PokemonDetailState
} from '@/stores/http/pokemon-api/v1/pokemons/_id/type';

export const usePokemonDetailStore = defineStore<
    string,
    PokemonDetailState,
    PokemonDetailGetter,
    PokemonDetailAction
>({
    id: 'pokemon-api/v1/pokemons/_id',

    state: () => ({
        _prevId: 0,
        _nextId: 0,
        _data: null
    }),

    getters: {
        /**
         * @returns {number}
         */
        prevId: (state) => state._prevId,
        /**
         * @returns {number}
         */
        nextId: (state) => state._nextId,
        /**
         * @returns {PokemonDetailResponseData | null}
         */
        data: (state) => state._data
    },

    actions: {
        /**
         * Pokemon 詳細取得.
         */
        async fetch(id, lang, game, regions) {
            const { data } = await http
                .get<PokemonDetailResponse>(`pokemons/${id}`, {
                    params: { lang, game, regions }
                })
                .catch((err) => {
                    throw err;
                });
            this._prevId = data.prevId;
            this._nextId = data.nextId;
            this._data = data.data;
        },
        reset() {
            this._prevId = 0;
            this._nextId = 0;
            this._data = null;
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePokemonDetailStore, import.meta.hot));
}
