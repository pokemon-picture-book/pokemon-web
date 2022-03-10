import { computed, provide } from 'vue';
import OPokemonList from '@/components/03-organisms/pokemon/o-pokemon-list/Index.vue';
import { PokemonStateKey, pokemonState, PokemonStateType } from '@/stores/http/pokemons';
import { OPokemonData } from '@/components/03-organisms/pokemon/o-pokemon-list';
import { commonData } from '@/stores/http/pokemons/msw';

export default {
    title: 'Organisms/Pokemon/o-pokemon-list'
};

export const Simple = () => ({
    components: { OPokemonList },
    template: '<o-pokemon-list :data="data" />',
    setup() {
        const computedMethods = {
            data: computed<OPokemonData>(() => {
                const { hits, data } = commonData;
                return {
                    hits,
                    items: data.map((pokemon) => ({
                        id: pokemon.id,
                        imageColor: pokemon.imageColor,
                        name: 'フシギダネ',
                        gameImagePath: '/img/sample/pokemon.jpg',
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
