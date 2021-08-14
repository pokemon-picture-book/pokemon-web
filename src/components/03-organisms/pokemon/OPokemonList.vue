<template>
    <section v-if="!state.isLoading" class="o-pokemon-list">
        <div v-if="!items.length" class="o-pokemon-list__empty">
            <span>No data...</span>
        </div>
        <div v-else v-for="item in items" :key="item.id" class="o-pokemon-list__card">
            <m-card class="o-pokemon-list__card--main">
                <template #img>
                    <div class="pokemon-card">
                        <img
                            :src="require(`@/assets/img/pokemon${item.mainImagePath}`)"
                            alt="pokemon"
                            class="pokemon-card__image"
                        />
                    </div>
                </template>
                <m-pokemon-type-and-name :name="item.name" :type-items="item.types" />
            </m-card>
        </div>
    </section>
    <template v-else>
        <o-spinner />
    </template>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, watch } from 'vue';
import { PokemonStateKey, pokemonState, PokemonStateType } from '@/stores/pokemon/pokemon';
import { OPokemonItem, OPokemonState } from '@/types/components/03-organisms/pokemon/OPokemonList';
import MCard from '@/components/02-molecules/data-display/MCard.vue';
import MPokemonTypeAndName from '@/components/02-molecules/pokemon/MPokemonTypeAndName.vue';
import OSpinner from '@/components/03-organisms/global/OSpinner.vue';
import { LocationQueryValue, useRoute } from 'vue-router';

// default parameter
const LANGUAGE = 'ja-Hrkt';
const GAME = 'rgby';
const REGIONS = ['kanto'];

export default defineComponent({
    components: {
        MCard,
        MPokemonTypeAndName,
        OSpinner
    },
    setup() {
        const route = useRoute();

        const store = pokemonState();
        provide<PokemonStateType>(PokemonStateKey, store);

        const state = reactive<OPokemonState>({
            isLoading: false
        });

        const computedMethod = {
            items: computed<OPokemonItem[]>(() => {
                return store.getter.pokemons.value.map((pokemon) => ({
                    id: pokemon.id,
                    imageColor: pokemon.imageColor,
                    name: pokemon.name,
                    mainImagePath: pokemon.gameImagePath.mainPath,
                    types: pokemon.types.map((type) => ({
                        code: type.code
                    }))
                }));
            })
        };

        const method = {};

        const privateMethod = {
            fetch: async (lang: string, game: string, regions: string[]) => {
                state.isLoading = true;
                await store.action.fetchAll(lang, game, regions);
                state.isLoading = false;
            }
        };

        watch(
            () => route.query,
            (newQuery) => {
                const queryGame = newQuery.game as LocationQueryValue;
                const queryRegions = newQuery.regions as LocationQueryValue[];

                const game = queryGame || GAME;
                const regions = (queryRegions && queryRegions.length
                    ? queryRegions
                    : REGIONS) as string[];

                privateMethod.fetch(LANGUAGE, game, regions);
            }
        );

        // fetch data
        privateMethod.fetch(LANGUAGE, GAME, REGIONS);

        return {
            state,
            ...computedMethod,
            ...method
        };
    }
});
</script>

<style lang="scss" scoped>
.o-pokemon-list {
    display: flex;
    flex-wrap: wrap;

    &__empty {
        margin: auto;
        padding: 24px;
    }

    &__card {
        margin: 0 16px;

        &--main {
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
