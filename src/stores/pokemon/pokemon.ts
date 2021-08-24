import { computed, InjectionKey, reactive } from 'vue';
import { State, Getter, Action } from '@/types/stores/pokemon/pokemon';
import repository from '@/plugins/http/api/pokemons';

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
            const { data: fetchData } = await repository.findAllByLangAndGameAndRegions(
                lang,
                game,
                regions,
                (page - 1) * LIMIT + 1,
                LIMIT
            );
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
