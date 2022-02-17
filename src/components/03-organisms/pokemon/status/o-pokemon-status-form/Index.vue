<template>
    <section class="o-pokemon-status-form">
        <h2>ステータスをひかくする</h2>
        <div class="o-pokemon-status-form__form form">
            <m-input-text
                v-model="state.inputTerm"
                placeholder="ポケモンのなまえ"
                :is-error="isError"
                :auto-complete-items="autoCompleteItems"
                :button-param="{
                    icon: 'add',
                    theme: 'primary'
                }"
                @selected-item="$emit('select', $event)"
            />
            <p v-if="isError" class="form__error">
                せんたくできるポケモンのじょうげんにたっしました
            </p>
        </div>
        <div class="o-pokemon-status-form__label-list label-list">
            <h3 class="label-list__title">ひかくするポケモン</h3>
            <div class="label-list__container" v-if="items.length">
                <a-label
                    v-for="(selectedItem, index) in items"
                    class="label-list__item"
                    :key="selectedItem.id"
                    :color="selectedItem.color"
                    :can-delete="selectedItem.canDelete"
                    @close="$emit('remove', index)"
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
        items: {
            type: Array as PropType<SelectedItem[]>,
            default: () => []
        },
        isError: {
            type: Boolean,
            default: () => false
        }
    },
    components: {
        MInputText,
        ALabel
    },
    setup(props) {
        const state = reactive({
            inputTerm: ''
        });

        const computedMethods = {
            autoCompleteItems: computed(() => {
                return props.autoCompleteItems
                    .filter((autoCompleteItem) => {
                        const itemName = kanaToHira(autoCompleteItem.name).toLowerCase();
                        const inputTerm = kanaToHira(state.inputTerm).toLowerCase();
                        return !(
                            props.items.some((item) => item.id === autoCompleteItem.id) ||
                            itemName.indexOf(inputTerm)
                        );
                    })
                    .slice(0, 10);
            })
        };

        return {
            state,
            ...computedMethods
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
            flex-wrap: wrap;
            margin-top: 8px;
        }

        &__item {
            margin-right: 16px;
            margin-top: 16px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>
