<template>
    <template v-if="state.isLoading">
        <o-spinner mode="full-screen" />
    </template>
    <section v-else class="o-pokemon-list">
        <template v-if="items.length">
            <div v-for="item in items" :key="item.id" class="o-pokemon-list__card">
                <m-card class="o-pokemon-list__card-main">
                    <template #img>
                        <div class="pokemon-card">
                            <img
                                :src="item.gameImagePath"
                                alt="pokemon"
                                class="pokemon-card__image"
                            />
                        </div>
                    </template>
                    <m-pokemon-type-and-name :name="item.name" :type-items="item.types" />
                </m-card>
            </div>
            <infinite-loading @infinite="infiniteHandler">
                <template v-slot:spinner>
                    <o-spinner mode="full-width" />
                </template>
                <template v-slot:no-more>
                    <div></div>
                </template>
            </infinite-loading>
        </template>
        <template v-else>
            <div class="o-pokemon-list__empty">
                <span>No data...</span>
            </div>
        </template>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, watch } from 'vue';
import { StateChanger } from 'vue-infinite-loading';
import InfiniteLoading from 'infinite-loading-vue3-ts';
import { PokemonStateKey, pokemonState, PokemonStateType } from '@/stores/pokemon/pokemon';
import { OPokemonItem, OPokemonState } from '@/types/components/03-organisms/pokemon/OPokemonList';
import MCard from '@/components/02-molecules/data-display/MCard.vue';
import MPokemonTypeAndName from '@/components/02-molecules/pokemon/MPokemonTypeAndName.vue';
import OSpinner from '@/components/03-organisms/global/OSpinner.vue';
import { LocationQueryValue, useRoute } from 'vue-router';

// default parameter
const LANGUAGE = 'ja-Hrkt';
const GAME = 'rgby';
const REGIONS = ['kanto'] as const;

export default defineComponent({
    components: {
        MCard,
        MPokemonTypeAndName,
        OSpinner,
        InfiniteLoading
    },
    setup() {
        const route = useRoute();

        const store = pokemonState();
        provide<PokemonStateType>(PokemonStateKey, store);

        const state = reactive<OPokemonState>({
            isLoading: false,
            page: 1
        });

        const computedMethods = {
            items: computed<OPokemonItem[]>(() => {
                return store.getter.pokemons.value.map((pokemon) => ({
                    id: pokemon.id,
                    imageColor: pokemon.imageColor,
                    name: pokemon.name,
                    gameImagePath: pokemon.gameImagePath,
                    types: pokemon.types.map((type) => ({
                        code: type.code
                    }))
                }));
            })
        };

        const methods = {
            infiniteHandler: async ($state: StateChanger) => {
                const { hits, pokemons } = store.getter;
                if (hits.value > pokemons.value.length) {
                    await privateMethod.fetch(++state.page);
                    $state.loaded();
                    return;
                }
                $state.complete();
            }
        };

        const privateMethod = {
            async fetchLoading(page: number) {
                state.isLoading = true;

                await this.fetch(page);

                state.isLoading = false;
            },
            async fetch(page: number) {
                const queryGame = route.query.game as LocationQueryValue;
                const queryRegions = route.query.regions as LocationQueryValue[];

                const game = queryGame || GAME;
                const regions = (queryRegions && queryRegions.length
                    ? queryRegions
                    : REGIONS) as string[];

                await store.action.fetchAll(LANGUAGE, game, regions, page);
            }
        };

        watch(
            () => route.query,
            () => privateMethod.fetchLoading((state.page = 1))
        );

        // fetch data
        privateMethod.fetchLoading(state.page);

        return {
            state,
            ...computedMethods,
            ...methods
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

.o-pokemon-list {
    display: flex;
    flex-wrap: wrap;

    &__empty {
        margin: auto;
        padding: 24px;
    }

    &__card {
        margin: 0 16px;

        &-main {
            width: 200px;
        }

        .pokemon-card {
            display: flex;
            justify-content: center;

            &__image {
                padding: 16px;
                height: 168px;
                max-width: 168px;
            }
        }
    }
}
</style>
