<template>
    <section class="o-pokemon-list">
        <template v-if="items.length">
            <m-card
                class="card-item o-pokemon-list__card-item"
                v-for="item in items"
                :key="item.id"
                :img="{
                    src: item.gameImagePath,
                    alt: item.name
                }"
            >
                <m-color-label-group :name="item.name" :type-items="item.types" />
            </m-card>
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
            <div class="empty o-pokemon-list__empty">
                <span>No data...</span>
            </div>
        </template>
    </section>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, reactive } from 'vue';
import { StateChanger } from 'vue-infinite-loading';
import InfiniteLoading from 'infinite-loading-vue3-ts';
import { PokemonStateKey, PokemonStateType } from '@/stores/pokemon/pokemon';
import { OPokemonItem, OPokemonState } from '@/types/components/03-organisms/pokemon/OPokemonList';
import MCard from '@/components/02-molecules/data-display/MCard.vue';
import MColorLabelGroup from '@/components/02-molecules/data-display/MColorLabelGroup.vue';
import OSpinner from '@/components/03-organisms/global/OSpinner.vue';

export default defineComponent({
    components: {
        MCard,
        MColorLabelGroup,
        OSpinner,
        InfiniteLoading
    },
    props: {
        items: {
            type: Array as PropType<OPokemonItem[]>,
            default: () => []
        }
    },
    setup(_, { emit }) {
        const store = inject<PokemonStateType>(PokemonStateKey);

        if (!store) {
            throw new Error('Inject failed.');
        }

        const state = reactive<OPokemonState>({
            page: 1
        });

        const methods = {
            infiniteHandler: async ($state: StateChanger) => {
                const { hits, pokemons } = store.getter;
                if (hits.value > pokemons.value.length) {
                    emit('fetch', ++state.page, () => {
                        $state.loaded();
                    });
                    return;
                }
                $state.complete();
            }
        };

        return {
            state,
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
        padding: 32px;
    }

    .empty {
        margin: auto;
    }

    &__card-item {
        margin: 32px 16px 0;
    }

    .card-item {
        width: 200px;

        &__image {
            display: flex;
            justify-content: center;

            & > img {
                padding: 16px;
                height: 168px;
                max-width: 168px;
            }
        }
    }
}
</style>
