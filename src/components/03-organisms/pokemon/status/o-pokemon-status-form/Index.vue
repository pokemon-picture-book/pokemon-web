<template>
    <section class="o-pokemon-status-form">
        <h2>ポケモンとひかくする</h2>
        <div class="o-pokemon-status-form__form form">
            <m-input-text
                v-model="state.inputTerm"
                placeholder="ポケモンのなまえ"
                :is-error="state.isError"
                :auto-complete-items="autoCompleteItems"
                :button-param="{
                    icon: 'add',
                    theme: 'primary'
                }"
                @selected-item="onAddItem"
            />
            <p v-if="state.isError" class="form__error">
                せんたくできるポケモンのじょうげんにたっしました
            </p>
        </div>
        <div class="o-pokemon-status-form__label-list label-list">
            <h3 class="label-list__title">ひかくするポケモン</h3>
            <div class="label-list__container" v-if="state.selectedItems.length">
                <a-label
                    v-for="(selectedItem, index) in state.selectedItems"
                    class="label-list__item"
                    :key="selectedItem.id"
                    :color="selectedItem.color"
                    :can-delete="selectedItem.canDelete"
                    @close="removeSelectedItem(index)"
                >
                    {{ selectedItem.name }}
                </a-label>
            </div>
            <div class="label-list__container" v-else>なし</div>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from '@vue/runtime-core';
import MInputText from '@/components/02-molecules/data-entry/m-input-text/Index.vue';
import ALabel from '@/components/01-atoms/display/a-label/Index.vue';
import { LabelColor } from '@/components/01-atoms/display/a-label';
import { kanaToHira } from '@/module/character';
import {
    AutoCompleteItem,
    SelectedItem
} from '@/components/03-organisms/pokemon/status/o-pokemon-status-form';

export default defineComponent({
    props: {
        autoCompleteItems: {
            type: Array as PropType<AutoCompleteItem[]>,
            default: () => []
        },
        defaultItems: {
            type: Array as PropType<SelectedItem[]>,
            default: () => []
        }
    },
    components: {
        MInputText,
        ALabel
    },
    setup(props, { emit }) {
        const LABEL_COLORS: LabelColor[] = ['red', 'green', 'blue'];

        const state = reactive({
            isError: false,
            inputTerm: '',
            selectedItems: [...props.defaultItems] as SelectedItem[]
        });

        const computedMethods = {
            autoCompleteItems: computed(() => {
                return props.autoCompleteItems
                    .filter((autoCompleteItem) => {
                        const itemName = kanaToHira(autoCompleteItem.name).toLowerCase();
                        const inputTerm = kanaToHira(state.inputTerm).toLowerCase();
                        return !(
                            state.selectedItems.some(
                                (selectedItem) => selectedItem.id === autoCompleteItem.id
                            ) || itemName.indexOf(inputTerm)
                        );
                    })
                    .slice(0, 10);
            })
        };

        const privateMethods = {
            addSelectedItems(selectedItem: AutoCompleteItem) {
                if (state.selectedItems.length < LABEL_COLORS.length) {
                    const usedColors = state.selectedItems.map((item) => item.color);
                    const unusedColor = LABEL_COLORS.filter((lc) => !usedColors.includes(lc))[0];
                    state.selectedItems.push({
                        ...selectedItem,
                        canDelete: true,
                        color: unusedColor
                    });
                    emit('selected-items', state.selectedItems);

                    if (state.selectedItems.length >= LABEL_COLORS.length) {
                        state.isError = true;
                    }
                }
            }
        };

        const methods = {
            onAddItem(selectedItem: AutoCompleteItem) {
                privateMethods.addSelectedItems(selectedItem);
            },
            removeSelectedItem(index: number) {
                state.selectedItems.splice(index, 1);
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

$input-width: 240px;

.o-pokemon-status-form {
    .form {
        margin: 32px 0;

        &__error {
            color: $p-error;
            padding-top: 8px;
            padding-left: 8px;
        }
    }

    .label-list {
        margin: 32px 0;

        &__container {
            display: flex;
            margin-top: 24px;
        }

        &__item {
            margin-left: 16px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
}
</style>
