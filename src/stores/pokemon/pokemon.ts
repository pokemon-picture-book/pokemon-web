import { computed, InjectionKey, reactive } from 'vue';
import { State, Getter, Action } from '@/types/stores/pokemon/pokemon';
import repository from '@/plugins/http/api/pokemons';

export const pokemonState = () => {
    const state: State = reactive({
        pokemons: []
    });

    const getter: Getter = {
        pokemons: computed(() => state.pokemons)
    };

    const action: Action = {
        fetchAll: async (lang: string, game: string, regions: string[]) => {
            const { data } = await repository.findAllByLangAndGameAndRegions(lang, game, regions);
            state.pokemons = data;
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
