import { computed, InjectionKey, reactive } from 'vue';
import http from '@/plugins/http';
import { PokemonResponse } from '@/types/plugins/http/api/pokemons';
import { State, Getter, Action } from '@/types/stores/pokemon/pokemon';

const LIMIT = 50;

export const pokemonState = () => {
    const state = reactive<State>({
        hits: 0,
        pokemons: []
    });

    const getter: Getter = {
        hits: computed(() => state.hits),
        pokemons: computed(() => state.pokemons)
    };

    const action: Action = {
        fetchAll: async (lang: string, game: string, regions: string[], page: number) => {
            const { data: fetchData } = await http
                .get<PokemonResponse>('pokemons', {
                    params: { lang, game, regions, offset: (page - 1) * LIMIT + 1, limit: LIMIT }
                })
                .catch((err) => {
                    throw err;
                });
            state.hits = fetchData.hits;
            const pokemons = fetchData.data || [];
            state.pokemons = page === 1 ? pokemons : state.pokemons.concat(pokemons);
        }
    };

    return {
        state,
        getter,
        action
    };
};

export type PokemonStateType = ReturnType<typeof pokemonState>;
export const PokemonStateKey: InjectionKey<PokemonStateType> = Symbol('PokemonState');

export default {};
