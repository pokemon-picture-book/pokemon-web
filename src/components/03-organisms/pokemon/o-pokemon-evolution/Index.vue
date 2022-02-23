<template>
    <section class="o-pokemon-evolution" v-if="data.length">
        <div
            v-for="pokemon in data"
            :key="pokemon.id"
            class="o-pokemon-evolution__container"
            :class="{ 'o-pokemon-evolution__multi-detail-container': Array.isArray(pokemon) }"
        >
            <template v-if="Array.isArray(pokemon)">
                <div
                    v-for="p in pokemon"
                    :key="p.id"
                    class="o-pokemon-evolution__detail"
                    :class="{ 'o-pokemon-evolution__spotlight': p.id === targetId }"
                >
                    <figure class="o-pokemon-evolution__img-wrapper">
                        <img
                            :src="p.gameImagePath"
                            :alt="p.pokemonName"
                            class="o-pokemon-evolution__img"
                        />
                    </figure>
                    <m-color-label-group :type-items="p.types" :name="p.pokemonName" />
                </div>
            </template>

            <div
                v-else
                class="o-pokemon-evolution__detail"
                :class="{ 'o-pokemon-evolution__spotlight': pokemon.id === targetId }"
            >
                <figure class="o-pokemon-evolution__img-wrapper">
                    <img
                        :src="pokemon.gameImagePath"
                        :alt="pokemon.pokemonName"
                        class="o-pokemon-evolution__img"
                    />
                </figure>
                <m-color-label-group :type-items="pokemon.types" :name="pokemon.pokemonName" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import MColorLabelGroup from '@/components/02-molecules/data-display/m-color-label-group/Index.vue';
import { OPokemonEvolutionItem } from 'src/components/03-organisms/pokemon/o-pokemon-evolution';

export default defineComponent({
    components: {
        MColorLabelGroup
    },
    props: {
        data: {
            type: Array as PropType<(OPokemonEvolutionItem | OPokemonEvolutionItem[])[]>,
            default: () => []
        },
        targetId: {
            type: Number
        }
    },
    setup() {}
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/components/index.scss';

.o-pokemon-evolution {
    $this: &;

    display: flex;

    &__multi-detail-container {
        display: flex;
        flex-wrap: wrap;
    }

    &__container {
        // &__container の最初の子要素以外
        &:not(:first-child) {
            margin-left: 16px;

            #{$this}__detail {
                margin-left: 24px;
                margin-bottom: 24px;

                &:first-child {
                    position: relative;

                    &::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        border: 14px solid transparent;
                        border-left: 12px solid $p-gray-color;
                        margin: 0 -24px;
                    }
                }
            }
        }
    }

    &__detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid $p-gray-color;
        border-radius: 8px;
        padding: 8px;
    }

    &__spotlight {
        background: $p-signpost-hover-color;
    }

    &__img {
        position: absolute;
        top: 50%;
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: translateY(-50%);

        &-wrapper {
            position: relative;
            padding-top: 100%;
            margin: 16px 8px;
            width: 176px;
        }
    }
}
</style>
