import { computed, InjectionKey, reactive } from 'vue';
import http from '@/plugins/http';
import {
    PokemonStatusResponse,
    State,
    Getter,
    Action
} from '@/stores/http/pokemons/_id/status/type';

export const pokemonStatusState = () => {
    const state: State = reactive({
        pokemonStatus: null
    });

    const getter: Getter = {
        pokemonStatus: computed(() => state.pokemonStatus)
    };

    const action: Action = {
        fetchAll: async (id, lang) => {
            const { data } = await http
                .get<PokemonStatusResponse>(`pokemons/${id}/status`, {
                    params: { lang }
                })
                .catch((err) => {
                    throw err;
                });
            state.pokemonStatus = data;
        }
    };

    return {
        state,
        getter,
        action
    };
};

export type PokemonStatusStateType = ReturnType<typeof pokemonStatusState>;
export const PokemonStatusStateKey: InjectionKey<PokemonStatusStateType> = Symbol(
    'PokemonStatusState'
);

export default {};
