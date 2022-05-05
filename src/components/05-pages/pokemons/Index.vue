<template>
    <o-spinner v-if="state.isLoading" mode="full-screen" />
    <o-pokemon-list v-else :data="data" @fetch="fetch" @to-pokemon-detail="toPokemonDetail" />
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch } from 'vue';
import { LocationQueryValue, useRoute, useRouter } from 'vue-router';
import OPokemonList from '@/components/03-organisms/pokemon/o-pokemon-list/Index.vue';
import OSpinner from '@/components/03-organisms/global/o-spinner/Index.vue';
import { usePokemonStore } from '@/stores/http/pokemon-api/v1/pokemons';
import { useSearchPokemonParamStore } from '@/stores/search/pokemon-param';
import { OPokemonData } from '@/components/03-organisms/pokemon/o-pokemon-list';

export default defineComponent({
    components: {
        OPokemonList,
        OSpinner
    },
    setup() {
        const route = useRoute();
        const router = useRouter();

        const pokemonStore = usePokemonStore();
        const searchParamStore = useSearchPokemonParamStore();

        {
            const queryGame = route.query.game as LocationQueryValue;
            const queryRegions = route.query.regions as LocationQueryValue[];
            if (!queryGame || !queryRegions || (queryRegions && !queryRegions.length)) {
                searchParamStore.setGame(queryGame);
                searchParamStore.setRegions(queryRegions as string[]);
                router.push({
                    path: '/pokemons',
                    query: {
                        game: searchParamStore.game,
                        regions: searchParamStore.regions
                    }
                });
            }
        }

        const state = reactive({
            isLoading: false
        });

        const computedMethods = {
            data: computed<OPokemonData>(() => {
                const { hits, data } = pokemonStore;
                return {
                    hits: hits,
                    items: data.map((pokemon) => ({
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
                searchParamStore.setGame(route.query.game as string);
                searchParamStore.setRegions(route.query.regions as string[]);
                searchParamStore.setInfiniteIndex(page);
                await pokemonStore.fetchAll(
                    searchParamStore.language,
                    searchParamStore.game,
                    searchParamStore.regions,
                    searchParamStore.infiniteIndex
                );

                done?.call(this);
            },
            toPokemonDetail(pokemonId: number) {
                router.push({
                    path: `/pokemons/${pokemonId}`,
                    query: {
                        ...route.query
                    }
                });
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
            (newQuery, oldQuery) => {
                const isMatched = Object.keys(newQuery).every((key) => {
                    if (Array.isArray(newQuery[key]) && Array.isArray(oldQuery[key])) {
                        return (
                            (newQuery[key] as LocationQueryValue[]).sort().toString() ===
                            (oldQuery[key] as LocationQueryValue[]).sort().toString()
                        );
                    }
                    return newQuery[key] === oldQuery[key];
                });
                if (Object.keys(newQuery).length !== Object.keys(oldQuery).length || !isMatched) {
                    privateMethods.firstFetch();
                }
            }
        );

        if (!pokemonStore.data.length) {
            privateMethods.firstFetch();
        }

        return {
            state,
            ...methods,
            ...computedMethods
        };
    }
});
</script>
