import { computed, InjectionKey, reactive } from 'vue';
import http from '@/plugins/http';
import {
    PokemonSimplicityResponse,
    State,
    Getter,
    Action
} from '@/stores/http/pokemons/simplicities/type';

export const pokemonSimplicityState = () => {
    const state: State = reactive({
        pokemonSimplicities: []
    });

    const getter: Getter = {
        pokemonSimplicities: computed(() => state.pokemonSimplicities)
    };

    const action: Action = {
        fetchAll: async (lang: string) => {
            const { data } = await http
                .get<PokemonSimplicityResponse[]>('pokemons/simplicities', {
                    params: { lang }
                })
                .catch((err) => {
                    throw err;
                });
            state.pokemonSimplicities = data;
        }
    };

    return {
        state,
        getter,
        action
    };
};

export type PokemonSimplicityStateType = ReturnType<typeof pokemonSimplicityState>;
export const PokemonSimplicityStateKey: InjectionKey<PokemonSimplicityStateType> = Symbol(
    'PokemonSimplicityState'
);

export default {};
