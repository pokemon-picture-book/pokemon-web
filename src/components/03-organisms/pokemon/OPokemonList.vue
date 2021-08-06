<template>
    <section class="o-pokemon-list">
        <div v-if="!state.items.length" class="o-pokemon-list__empty">
            <span>No data...</span>
        </div>
        <div v-else v-for="item in state.items" :key="item.id" class="o-pokemon-list__card">
            <m-card class="o-pokemon-list__card--main">
                <template #img>
                    <div
                        v-for="(path, index) in item.gameImagePaths"
                        :key="path"
                        class="pokemon-card"
                    >
                        <img
                            v-if="index === state.gameImagePathIndex[item.id]"
                            :src="require(`@/assets/img/pokemon${path}`)"
                            @click="incrementGameImagePathIndex(item)"
                            alt="pokemon"
                            class="pokemon-card__image"
                        />
                    </div>
                </template>
                <m-pokemon-type-and-name :name="item.name" :type-items="item.types" />
            </m-card>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, watch } from 'vue';
import { PokemonStateKey, pokemonState, PokemonStateType } from '@/stores/pokemon/pokemon';
import { OPokemonItem, OPokemonState } from '@/types/components/03-organisms/pokemon/OPokemonList';
import MCard from '@/components/02-molecules/data-display/MCard.vue';
import MPokemonTypeAndName from '@/components/02-molecules/pokemon/MPokemonTypeAndName.vue';

// TODO: props から取得するよう修正すること
const LANGUAGE = 'ja-Hrkt';
const GAME = 'rgby';
const REGIONS = ['kanto'];

export default defineComponent({
    components: {
        MCard,
        MPokemonTypeAndName
    },
    async setup() {
        const store = pokemonState();
        provide<PokemonStateType>(PokemonStateKey, store);

        const pathReg = new RegExp(`.*(/${GAME}/).*`, 'i');
        const state = reactive<OPokemonState>({
            items: [],
            gameImagePathIndex: {}
        });

        const computedMethod = {};

        const method = {
            incrementGameImagePathIndex({ id, gameImagePaths }: OPokemonItem) {
                const increment = state.gameImagePathIndex[id] + 1;
                if (increment >= gameImagePaths.length) {
                    state.gameImagePathIndex[id] = 0;
                    return;
                }
                state.gameImagePathIndex[id] = increment;
            }
        };

        watch(
            () => store.getter.pokemons.value,
            (newPokemons) => {
                state.items = newPokemons.map((pokemon) => {
                    if (!state.gameImagePathIndex[pokemon.id]) {
                        state.gameImagePathIndex[pokemon.id] = 0;
                    }
                    const { mainPath, otherPaths } = pokemon.gameImagePath;
                    const gameImagePaths = [mainPath].concat(
                        otherPaths.filter((path) => pathReg.test(path))
                    );
                    return {
                        ...pokemon,
                        gameImagePaths,
                        types: pokemon.types.map((type) => ({
                            code: type.code
                        }))
                    };
                });
            }
        );

        // fetch data
        await store.action.fetchAll(LANGUAGE, GAME, REGIONS);

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
