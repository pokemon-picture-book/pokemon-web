import { computed, provide } from 'vue';
import OPokemonList from '@/components/03-organisms/pokemon/o-pokemon-list/Index.vue';
import { PokemonStateKey, pokemonState, PokemonStateType } from '@/stores/pokemon/pokemon';
import { OPokemonData } from '@/components/03-organisms/pokemon/o-pokemon-list';

export default {
    title: 'Organisms/Pokemon/o-pokemon-list'
};

export const Simple = () => ({
    components: { OPokemonList },
    template: '<o-pokemon-list :data="data" />',
    setup() {
        const store = pokemonState();
        provide<PokemonStateType>(PokemonStateKey, store);

        store.action.fetchAll('lang', 'game', ['region1'], 1);

        const computedMethods = {
            data: computed<OPokemonData>(() => {
                const { hits, pokemons } = store.getter;
                return {
                    hits: hits.value,
                    items: pokemons.value.map((pokemon) => ({
                        id: pokemon.id,
                        imageColor: pokemon.imageColor,
                        name: pokemon.name,
                        gameImagePath: '/img/pokemon.jpg',
                        types: pokemon.types.map((type) => ({
                            code: type.code
                        }))
                    }))
                };
            })
        };

        return {
            ...computedMethods
        };
    }
});

export const NoData = () => ({
    components: { OPokemonList },
    template: '<o-pokemon-list />',
    setup() {
        const store = pokemonState();
        provide<PokemonStateType>(PokemonStateKey, store);
    }
});
