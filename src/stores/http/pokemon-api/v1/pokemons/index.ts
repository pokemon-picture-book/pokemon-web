import { acceptHMRUpdate, defineStore } from 'pinia';
import http from '@/plugins/http';
import {
    PokemonAction,
    PokemonGetter,
    PokemonResponse,
    PokemonState
} from '@/stores/http/pokemon-api/v1/pokemons/type';

const LIMIT = 50;

export const usePokemonStore = defineStore<string, PokemonState, PokemonGetter, PokemonAction>({
    id: 'pokemon-api/v1/pokemons',

    state: () => ({
        _hits: 0,
        _data: []
    }),

    getters: {
        /**
         * @returns {number}
         */
        hits: (state) => state._hits,
        /**
         * @returns {PokemonResponseData[]}
         */
        data: (state) => state._data
    },

    actions: {
        /**
         * Pokemon 一覧取得.
         */
        async fetchAll(lang: string, game: string, regions: string[], page: number) {
            const { data: fetchData } = await http
                .get<PokemonResponse>('pokemons', {
                    params: { lang, game, regions, offset: (page - 1) * LIMIT + 1, limit: LIMIT }
                })
                .catch((err) => {
                    throw err;
                });
            this._hits = fetchData.hits;
            const pokemons = fetchData.data || [];
            this._data = page === 1 ? pokemons : this._data.concat(pokemons);
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePokemonStore, import.meta.hot));
}
