import { computed, InjectionKey, reactive } from 'vue';
import http from '@/plugins/http';
import { PokemonDetailResponse, State, Getter, Action } from '@/stores/http/pokemons/_id/type';

export const pokemonDetailState = () => {
    const state: State = reactive({
        prevId: 0,
        nextId: 0,
        pokemonDetail: null
    });

    const getter: Getter = {
        prevId: computed(() => state.prevId),
        nextId: computed(() => state.nextId),
        pokemonDetail: computed(() => state.pokemonDetail)
    };

    const action: Action = {
        fetch: async (id, lang, game, regions: string[]) => {
            const { data } = await http
                .get<PokemonDetailResponse>(`pokemons/${id}`, {
                    params: { lang, game, regions }
                })
                .catch((err) => {
                    throw err;
                });
            state.prevId = data.prevId;
            state.nextId = data.nextId;
            state.pokemonDetail = data.data;
        },
        reset: () => {
            state.pokemonDetail = null;
        }
    };

    return {
        state,
        getter,
        action
    };
};

export type PokemonDetailStateType = ReturnType<typeof pokemonDetailState>;
export const PokemonDetailStateKey: InjectionKey<PokemonDetailStateType> = Symbol(
    'PokemonDetailState'
);

export default {};
