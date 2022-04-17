<template>
    <section class="o-pokemon-status">
        <div class="o-pokemon-status__title">
            <i class="ib ib-ic-twotone-catching-pokemon ib-3x"></i>
            <h2>ステータス</h2>
        </div>
        <div
            class="o-pokemon-status__contents"
            :class="[`o-pokemon-status__contents-${contentsAlign}`]"
        >
            <o-pokemon-status-chart
                class="o-pokemon-status__chart"
                width="400px"
                :datasets="datasets"
            />
            <o-pokemon-status-form
                class="o-pokemon-status__form"
                :auto-complete-items="autoCompleteItems"
                :items="items"
                :is-error="state.isError"
                @select="selectedItem"
                @remove="removeItem"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, reactive } from 'vue';
import OPokemonStatusChart from '@/components/03-organisms/pokemon/status/o-pokemon-status-chart/Index.vue';
import OPokemonStatusForm from '@/components/03-organisms/pokemon/status/o-pokemon-status-form/Index.vue';
import {
    AutoCompleteItem,
    SelectedItem
} from '@/components/03-organisms/pokemon/status/o-pokemon-status-form';
import { StatusChartDataset } from '@/components/03-organisms/pokemon/status/o-pokemon-status-chart';
import { usePokemonStatusStore } from '@/stores/http/pokemon-api/v1/pokemons/_id/status';
import { PokemonStatusDetail } from '@/components/03-organisms/pokemon/status/o-pokemon-status';

// default parameter
const LANGUAGE = 'ja-Hrkt';

const COLORS: Readonly<{ name: string; rgba: `${number}, ${number}, ${number}` }[]> = [
    {
        name: 'red',
        // other color: http://www.netyasun.com/home/color.html
        rgba: '255, 0, 0'
    },
    {
        name: 'green',
        rgba: '0, 255, 0'
    },
    {
        name: 'blue',
        rgba: '0, 0, 255'
    }
];

export default defineComponent({
    components: {
        OPokemonStatusChart,
        OPokemonStatusForm
    },
    props: {
        autoCompleteItems: {
            type: Array as PropType<AutoCompleteItem[]>,
            default: () => []
        },
        pokemonDetail: {
            type: Object as PropType<PokemonStatusDetail>,
            required: true
        },
        contentsAlign: {
            type: String as PropType<'center' | 'left' | 'right'>,
            default: () => 'left'
        }
    },
    setup(props) {
        const store = usePokemonStatusStore();

        const state = reactive({
            data: [
                {
                    color: COLORS[0],
                    dataset: {
                        label: props.pokemonDetail.name,
                        data: props.pokemonDetail.status
                    } as Omit<StatusChartDataset, 'rgbaColor'>,
                    item: {
                        id: props.pokemonDetail.id,
                        name: props.pokemonDetail.name,
                        canDelete: false
                    } as Omit<SelectedItem, 'color'>
                }
            ],
            isError: false
        });

        const computedMethods = {
            datasets: computed<StatusChartDataset[]>(() => {
                return state.data.map((d) => ({
                    ...d.dataset,
                    rgbaColor: d.color.rgba
                }));
            }),
            items: computed<SelectedItem[]>(() => {
                return state.data.map((d) => ({
                    ...d.item,
                    color: d.color.name
                }));
            })
        };

        const methods = {
            async selectedItem(selectedItem: AutoCompleteItem) {
                if (state.data.length < COLORS.length) {
                    // status 取得の API を dispatch
                    await store.fetch(selectedItem.id, LANGUAGE).catch((err) => {
                        /* TODO: redirect 404 page */
                        throw err;
                    });

                    const usedColors = state.data.map((d) => d.color.name);
                    const unusedColor = COLORS.filter(
                        (color) => !usedColors.includes(color.name)
                    ).shift()!;

                    const {
                        hp,
                        attack,
                        defense,
                        specialAttack,
                        specialDefense,
                        speed
                    } = store.data!.status;
                    state.data.push({
                        color: unusedColor,
                        dataset: {
                            label: selectedItem.name,
                            data: [hp, attack, specialAttack, speed, specialDefense, defense]
                        },
                        item: {
                            id: selectedItem.id,
                            name: selectedItem.name,
                            canDelete: true
                        }
                    });

                    if (state.data.length >= COLORS.length) {
                        state.isError = true;
                    }
                }
            },
            removeItem(index: number) {
                state.data.splice(index, 1);
                state.isError = false;
            }
        };

        return {
            state,
            ...computedMethods,
            ...methods
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/components/index.scss';

.o-pokemon-status {
    &__title {
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        :not(:first-child) {
            margin-left: 16px;
        }
    }

    &__contents {
        display: flex;

        &-center {
            justify-content: center;
        }

        &-left {
            justify-content: flex-start;
        }

        &-right {
            justify-content: flex-end;
        }
    }

    &__chart {
        margin: 0 24px;

        @media only screen and (max-width: $mobile-border-width) {
            width: auto !important;
            margin: 0 16px;
        }
    }

    &__form {
        width: 400px;
        margin: 24px;

        @media only screen and (max-width: $mobile-border-width) {
            width: auto;
            margin: 16px;
        }
    }
}
</style>
