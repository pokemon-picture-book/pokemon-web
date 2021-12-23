<template>
    <section class="o-pokemon-list">
        <template v-if="data.items.length">
            <m-card
                class="o-pokemon-list__card-item"
                v-for="item in data.items"
                :key="item.id"
                :img="{
                    src: item.gameImagePath,
                    alt: item.name
                }"
            >
                <m-color-label-group :name="item.name" :type-items="item.types" />
            </m-card>
            <infinite-loading class="o-pokemon-list__infinite-loading" @infinite="infiniteHandler">
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
import { OPokemonData, OPokemonState } from '@/types/components/03-organisms/pokemon/OPokemonList';
import MCard from '@/components/02-molecules/data-display/MCard.vue';
import MColorLabelGroup from '@/components/02-molecules/data-display/MColorLabelGroup.vue';
import OSpinner from '@/components/03-organisms/global/o-spinner/Index.vue';

export default defineComponent({
    components: {
        MCard,
        MColorLabelGroup,
        OSpinner,
        InfiniteLoading
    },
    props: {
        data: {
            type: Object as PropType<OPokemonData>,
            default: () => ({ hits: 0, items: [] })
        }
    },
    setup(props, { emit }) {
        const store = inject<PokemonStateType>(PokemonStateKey);

        if (!store) {
            throw new Error('Inject failed.');
        }

        const state = reactive<OPokemonState>({
            infiniteIndex: 1
        });

        const methods = {
            infiniteHandler: async ($state: StateChanger) => {
                const { hits, items } = props.data;
                if (hits > items.length) {
                    emit('fetch', ++state.infiniteIndex, () => {
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
@import '@/assets/style/components/index.scss';

.o-pokemon-list {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0 auto;
    width: 96vw;

    &__empty {
        padding: 32px;
    }

    .empty {
        margin: auto;
    }

    &__card-item {
        width: 31vw;
        margin: 0 0.5vw calc((100vw / 750) * 45) 0.5vw;

        @include font-size(16);

        @media screen and (min-width: $mobile-border-width) {
            width: 15.5vw;
            margin: 0 0.25vw calc((30 / 1280) * 100vw) 0.25vw;
        }
    }

    &__infinite-loading {
        width: 100%;
    }
}
</style>
