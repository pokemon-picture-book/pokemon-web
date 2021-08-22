import { computed, InjectionKey, reactive } from 'vue';
import { State, Getter, Action } from '@/types/stores/pokemon/pokemon';
import repository from '@/plugins/http/api/pokemons';

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
        fetchAll: async (lang: string, game: string, regions: string[]) => {
            const { data: fetchData } = await repository.findAllByLangAndGameAndRegions(
                lang,
                game,
                regions
            );
            state.hits = fetchData.hits;
            state.pokemons = fetchData.data || [];
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
