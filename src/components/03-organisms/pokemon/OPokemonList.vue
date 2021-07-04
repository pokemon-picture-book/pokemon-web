<template>
    <section class="o-pokemon-list">
        <div v-for="(item, index) in items" :key="index" class="o-pokemon-list__card">
            <m-card class="o-pokemon-list__card--main">
                <template #img>
                    <img
                        :src="
                            require(`@/assets/img/pokemon${item.gameImagePaths[2]}`)
                        "
                        alt="pokemon"
                        class="o-pokemon-list__card--image"
                    >
                </template>
                <m-pokemon-type-and-name :name="item.name" :type-items="item.types" />
            </m-card>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue';
import { PokemonStateKey, pokemonState, PokemonStateType } from '@/stores/pokemon/pokemon';
import { OPokemonItem } from '@/types/components/03-organisms/pokemon/OPokemonList';
import MCard from '@/components/02-molecules/data-display/MCard.vue';
import MPokemonTypeAndName from '@/components/02-molecules/pokemon/MPokemonTypeAndName.vue';

export default defineComponent({
    components: {
        MCard,
        MPokemonTypeAndName
    },
    setup() {
        const store = pokemonState();
        provide<PokemonStateType>(PokemonStateKey, store);

        store.action.fetchAll('ja-Hrkt', 'rgby', ['kanto']);

        const computedMethod = {
            items: computed<OPokemonItem[]>(() => {
                return store.getter.pokemons.value.map(pokemon => ({
                    ...pokemon,
                    types: pokemon.types.map(type => ({
                        code: type.code
                    }))
                }))
            })
        };

        const method = {};

        return {
            store,
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

    &__card {
        margin: 0 16px;

        &--main {
            width: 200px;
        }

        &--image {
            width: 100%;
        }
    }
}
</style>
