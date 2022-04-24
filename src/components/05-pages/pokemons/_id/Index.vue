<template>
    <o-spinner v-if="state.isLoading" mode="full-screen" />

    <section class="pokemons-id-detail">
        <o-pokemon-detail
            v-if="detail"
            class="pokemons-id-detail__item pokemon-detail"
            :data="detail.data"
            :prev-id="detail.prevId"
            :next-id="detail.nextId"
            @to-pokemon-detail="toPokemonDetail"
        />
        <o-pokemon-status
            v-if="statusPokemonDetail"
            :pokemon-detail="statusPokemonDetail"
            :auto-complete-items="autoCompleteItems"
            class="pokemons-id-detail__item pokemon-status"
            contents-align="center"
        />
        <o-pokemon-evolution
            v-if="evolutionData"
            :data="evolutionData.data"
            :target-id="evolutionData.targetId"
            class="pokemons-id-detail__item pokemon-evolution"
            contents-align="center"
            @to-pokemon-detail="toPokemonDetail"
        />
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, watch } from 'vue';
import { LocationQueryValue, useRoute, useRouter } from 'vue-router';
import OPokemonDetail from '@/components/03-organisms/pokemon/o-pokemon-detail/Index.vue';
import OPokemonStatus from '@/components/03-organisms/pokemon/status/o-pokemon-status/Index.vue';
import OPokemonEvolution from '@/components/03-organisms/pokemon/o-pokemon-evolution/Index.vue';
import OSpinner from '@/components/03-organisms/global/o-spinner/Index.vue';
import { usePokemonDetailStore } from '@/stores/http/pokemon-api/v1/pokemons/_id';
import { usePokemonSimplicityStore } from '@/stores/http/pokemon-api/v1/pokemons/simplicities';
import { OPokemonDetailData } from '@/components/03-organisms/pokemon/o-pokemon-detail';
import { PokemonStatusDetail } from '@/components/03-organisms/pokemon/status/o-pokemon-status';
import { AutoCompleteItem } from '@/components/03-organisms/pokemon/status/o-pokemon-status-form';
import { OPokemonEvolutionItem } from 'src/components/03-organisms/pokemon/o-pokemon-evolution';
import { EvolutionPokemonDetail } from '@/stores/http/pokemon-api/v1/pokemons/_id/type';

const LANGUAGE = 'ja-Hrkt';

export default defineComponent({
    components: {
        OPokemonDetail,
        OPokemonStatus,
        OPokemonEvolution,
        OSpinner
    },
    setup() {
        const router = useRouter();
        const route = useRoute();

        const store = usePokemonDetailStore();
        const simplicityStore = usePokemonSimplicityStore();

        const state = reactive({
            isLoading: false
        });

        const privateMethods = {
            checkParam() {
                const queryGame = route.query.game as LocationQueryValue;
                const queryRegions = route.query.regions as LocationQueryValue[];
                if (!queryGame || !queryRegions || (queryRegions && !queryRegions.length)) {
                    router.push({
                        path: '/pokemons'
                    });
                    return;
                }
            },
            async fetchPokemonDetail() {
                this.checkParam();
                store.reset();

                const { id } = route.params;
                const queryGame = route.query.game as string;
                const queryRegions = route.query.regions as string[];

                state.isLoading = true;
                await store.fetch(Number(id), LANGUAGE, queryGame, queryRegions);
                state.isLoading = false;
            },
            async fetchSimplicity() {
                state.isLoading = true;
                await simplicityStore.fetchAll(LANGUAGE);
                state.isLoading = false;
            },
            toPokemonEvolutionItem(evolutionPokemonDetail: EvolutionPokemonDetail) {
                return {
                    id: evolutionPokemonDetail.id,
                    pokemonName: evolutionPokemonDetail.pokemonName,
                    types: evolutionPokemonDetail.types.map((type) => ({
                        code: type.code,
                        label: type.name
                    })),
                    gameImagePath: evolutionPokemonDetail.gameImagePath
                };
            }
        };

        privateMethods.fetchPokemonDetail();
        privateMethods.fetchSimplicity();

        const computedMethods = {
            detail: computed<OPokemonDetailData | null>(() => {
                const pokemonDetail = store.data;
                if (!pokemonDetail) {
                    return null;
                }
                return {
                    prevId: store.prevId,
                    nextId: store.nextId,
                    data: {
                        no: pokemonDetail.id,
                        name: pokemonDetail.pokemonName,
                        genus: pokemonDetail.genus,
                        types: pokemonDetail.types.map((type) => ({
                            code: type.code,
                            label: type.name
                        })),
                        height: pokemonDetail.height,
                        weight: pokemonDetail.weight,
                        flavorText: pokemonDetail.flavorText.replaceAll('\n', '　'),
                        mainImage: {
                            src: pokemonDetail.image.mainGameImage,
                            alt: pokemonDetail.pokemonName
                        },
                        subImage: {
                            src: pokemonDetail.image.footmarkImages.shift()!,
                            alt: pokemonDetail.pokemonName
                        },
                        iconImage: {
                            src: pokemonDetail.image.handheldIconImages.shift()!,
                            alt: pokemonDetail.pokemonName
                        }
                    }
                };
            }),
            statusPokemonDetail: computed<PokemonStatusDetail | null>(() => {
                const pokemonDetail = store.data;
                if (!pokemonDetail) {
                    return null;
                }
                const {
                    hp,
                    attack,
                    specialAttack,
                    speed,
                    specialDefense,
                    defense
                } = pokemonDetail.status;
                return {
                    id: pokemonDetail.id,
                    name: pokemonDetail.pokemonName,
                    status: [hp, attack, specialAttack, speed, specialDefense, defense]
                };
            }),
            autoCompleteItems: computed<AutoCompleteItem[]>(() => {
                return simplicityStore.data.data || [];
            }),
            evolutionData: computed<{
                targetId: number;
                data: (OPokemonEvolutionItem | OPokemonEvolutionItem[])[];
            } | null>(() => {
                const pokemonDetail = store.data;
                if (!pokemonDetail) {
                    return null;
                }
                const results: OPokemonEvolutionItem[][] = [];
                const { evolutions } = pokemonDetail;
                for (const evolution of evolutions) {
                    const existsFromPokemon = results.some((result) => {
                        return result.some((r) => r.id === evolution.fromPokemon.id);
                    });
                    if (!existsFromPokemon) {
                        results.push([
                            privateMethods.toPokemonEvolutionItem(evolution.fromPokemon)
                        ]);
                    } else {
                        const index = results.findIndex((result) => {
                            return result.some((r) => r.id === evolution.fromPokemon.id);
                        });
                        const existsToPokemon = results.some((result) => {
                            return result.some((r) => r.id === evolution.toPokemon.id);
                        });
                        if (index + 1 !== results.length && !existsToPokemon) {
                            results[index + 1].push(
                                privateMethods.toPokemonEvolutionItem(evolution.toPokemon)
                            );
                        }
                    }
                    const existsToPokemon = results.some((result) => {
                        return result.some((r) => r.id === evolution.toPokemon.id);
                    });
                    if (!existsToPokemon) {
                        results.push([privateMethods.toPokemonEvolutionItem(evolution.toPokemon)]);
                    }
                }
                return {
                    targetId: pokemonDetail.id,
                    data: results.map((resultItems) => {
                        if (resultItems.length === 1) {
                            return resultItems[0];
                        }
                        return resultItems;
                    })
                };
            })
        };

        const methods = {
            async toPokemonDetail(pokemonId: number) {
                await router.push({
                    path: `/pokemons/${pokemonId}`,
                    query: {
                        game: route.query.game,
                        regions: route.query.regions,
                        count: route.query.count,
                        firstId: route.query.firstId
                    }
                });
            }
        };

        // https://router.vuejs.org/guide/advanced/composition-api.html#accessing-the-router-and-current-route-inside-setup
        watch(
            () => route.params.id,
            (newId) => {
                if (newId) {
                    privateMethods.fetchPokemonDetail();
                }
            }
        );

        return {
            state,
            dataLimit: Number(route.query.count),
            firstId: Number(route.query.firstId),
            ...computedMethods,
            ...methods
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/components/index.scss';

.pokemons-id-detail {
    margin: -16px;
    min-width: 904px;

    &__item {
        &:not(:first-child) {
            width: 840px;
            margin: 32px auto;
        }
    }

    .pokemon-status,
    .pokemon-evolution {
        border: 4px solid $p-light-gray-color;
        border-radius: 16px;
        padding: 16px;
    }
}
</style>
