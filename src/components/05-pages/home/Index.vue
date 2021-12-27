<template>
    <o-spinner v-if="state.isLoading" mode="full-screen" />
    <o-pokemon-list v-else :data="data" @fetch="fetch" />
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, watch } from 'vue';
import { LocationQueryValue, useRoute } from 'vue-router';
import OPokemonList from '@/components/03-organisms/pokemon/o-pokemon-list/Index.vue';
import OSpinner from '@/components/03-organisms/global/o-spinner/Index.vue';
import { PokemonStateKey, pokemonState, PokemonStateType } from '@/stores/pokemon/pokemon';
import { OPokemonData } from '@/components/03-organisms/pokemon/o-pokemon-list';

// default parameter
const LANGUAGE = 'ja-Hrkt';
const GAME = 'rgby';
const REGIONS = ['kanto'] as const;

export default defineComponent({
    components: {
        OPokemonList,
        OSpinner
    },
    setup() {
        const route = useRoute();
        const store = pokemonState();
        provide<PokemonStateType>(PokemonStateKey, store);

        const state = reactive({
            isLoading: false
        });

        const computedMethods = {
            data: computed<OPokemonData>(() => {
                const { hits, pokemons } = store.getter;
                return {
                    hits: hits.value,
                    items: pokemons.value.map((pokemon) => ({
                        id: pokemon.id,
                        imageColor: pokemon.imageColor,
                        name: pokemon.name,
                        gameImagePath: pokemon.gameImagePath,
                        types: pokemon.types.map((type) => ({
                            code: type.code
                        }))
                    }))
                };
            })
        };

        const methods = {
            async fetch(page: number, done?: () => void) {
                const queryGame = route.query.game as LocationQueryValue;
                const queryRegions = route.query.regions as LocationQueryValue[];

                const game = queryGame || GAME;
                const regions = (queryRegions && queryRegions.length
                    ? queryRegions
                    : REGIONS) as string[];
                await store.action.fetchAll(LANGUAGE, game, regions, page);

                done?.call(this);
            }
        };

        const privateMethods = {
            firstFetch: async () => {
                state.isLoading = true;
                await methods.fetch(1);
                state.isLoading = false;
            }
        };

        watch(
            () => route.query,
            () => privateMethods.firstFetch()
        );

        privateMethods.firstFetch();

        return {
            state,
            ...methods,
            ...computedMethods
        };
    }
});
</script>
