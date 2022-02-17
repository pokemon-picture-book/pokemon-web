import { computed, InjectionKey, reactive } from 'vue';
import http from '@/plugins/http';
import { PokemonDetailResponse, State, Getter, Action } from '@/stores/http/pokemons/_id/type';

export const pokemonDetailState = () => {
    const state: State = reactive({
        pokemonDetail: null
    });

    const getter: Getter = {
        pokemonDetail: computed(() => state.pokemonDetail)
    };

    const action: Action = {
        fetchAll: async (id, lang, game) => {
            const { data } = await http
                .get<PokemonDetailResponse>(`pokemons/${id}`, {
                    params: { lang, game }
                })
                .catch((err) => {
                    throw err;
                });
            state.pokemonDetail = data;
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
