import { acceptHMRUpdate, defineStore } from 'pinia';
import http from '@/plugins/http';
import {
    PokemonSimplicityAction,
    PokemonSimplicityGetter,
    PokemonSimplicityResponse,
    PokemonSimplicityState
} from '@/stores/http/pokemon-api/v1/pokemons/simplicities/type';

export const usePokemonSimplicityStore = defineStore<
    string,
    PokemonSimplicityState,
    PokemonSimplicityGetter,
    PokemonSimplicityAction
>({
    id: 'pokemon-api/v1/pokemons/simplicities',

    state: () => ({
        _data: {
            hits: 0,
            data: []
        }
    }),

    getters: {
        /**
         * @returns {PokemonSimplicityResponse}
         */
        data: (state) => state._data
    },

    actions: {
        /**
         * Pokemon Simplicity 一覧取得.
         */
        async fetchAll(lang: string) {
            const { data } = await http
                .get<PokemonSimplicityResponse>('pokemons/simplicities', {
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
    import.meta.hot.accept(acceptHMRUpdate(usePokemonSimplicityStore, import.meta.hot));
}
