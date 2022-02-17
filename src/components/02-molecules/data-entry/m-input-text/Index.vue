<template>
    <div class="m-input-text">
        <div class="m-input-text__container">
            <input
                type="text"
                class="m-input-text__input-field"
                :class="{
                    'm-input-text__input-field--error': isError,
                    'm-input-text__input-field--in-button': !!buttonParam
                }"
                :placeholder="placeholder"
                v-model="model"
                @click="onInputClick"
                @input="onInputText"
                @keydown.prevent.down="moveNext"
                @keydown.prevent.up="movePrev"
                @keydown.esc="onEsc"
                @keydown.enter="onSelect"
            />
            <ul
                class="m-input-text__autocomplete autocomplete"
                v-if="model && state.isShowAutoComplete && autoCompleteItems.length"
            >
                <li
                    v-for="(autoCompleteItem, index) in autoCompleteItems"
                    :key="autoCompleteItem.id"
                    :class="AUTOCOMPLETE_ITEM_CLASS_NAME"
                    v-on:mouseover="mouseOverAction(index)"
                    @click="onClick(autoCompleteItem)"
                >
                    {{ autoCompleteItem.name }}
                </li>
            </ul>
            <template v-if="buttonParam">
                <a-button
                    :icon="buttonParam.icon || 'none'"
                    :theme="buttonParam.theme || 'default'"
                    class="m-input-text__input-button"
                    @click="onSelect"
                />
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from '@vue/runtime-core';
import AButton from '@/components/01-atoms/general/a-button/Index.vue';
import {
    AutoCompleteItem,
    InputButtonParam
} from '@/components/02-molecules/data-entry/m-input-text';
import { onBodyClick } from '@/module/documentEvent';
import { kanaToHira } from '@/module/character';

const AUTOCOMPLETE_ITEM_CLASS_NAME = 'autocomplete__item';

export default defineComponent({
    components: {
        AButton
    },
    props: {
        placeholder: {
            type: String,
            default: () => ''
        },
        isError: {
            type: Boolean,
            default: () => false
        },
        modelValue: {
            type: String,
            default: () => ''
        },
        autoCompleteItems: {
            type: Array as PropType<AutoCompleteItem[]>,
            default: () => []
        },
        buttonParam: {
            type: Object as PropType<InputButtonParam | undefined>
        }
    },
    setup(props, { emit }) {
        const state = reactive({
            autoCompleteIndex: -1,
            isShowAutoComplete: false
        });

        onBodyClick((e) => {
            if (
                !['m-input-text__input-field', 'm-input-text__input-button'].includes(
                    e.target.className
                )
            ) {
                state.isShowAutoComplete = false;
                state.autoCompleteIndex = -1;
            }
        });

        const privateMethods = {
            resetAutoComplete() {
                computedMethods.model.value = '';
                state.isShowAutoComplete = false;
                state.autoCompleteIndex = -1;
            },
            existsAutoCompleteItem(index: number) {
                return !!document.getElementsByClassName(AUTOCOMPLETE_ITEM_CLASS_NAME)[index];
            },
            unSelectAutoCompleteItem() {
                for (
                    let i = 0;
                    i < document.getElementsByClassName(AUTOCOMPLETE_ITEM_CLASS_NAME).length;
                    i++
                ) {
                    document.getElementsByClassName(AUTOCOMPLETE_ITEM_CLASS_NAME)[
                        i
                    ].className = AUTOCOMPLETE_ITEM_CLASS_NAME;
                }
            },
            selectAutoCompleteItem(index: number) {
                this.unSelectAutoCompleteItem();
                document.getElementsByClassName(AUTOCOMPLETE_ITEM_CLASS_NAME)[
                    index
                ].className = `${AUTOCOMPLETE_ITEM_CLASS_NAME} selection`;
            }
        };

        const computedMethods = {
            model: computed({
                get: () => props.modelValue,
                set: (newModelValue) => emit('update:modelValue', newModelValue)
            })
        };

        const methods = {
            onInputClick() {
                state.isShowAutoComplete = true;
            },
            onInputText() {
                state.isShowAutoComplete = true;
            },
            moveNext() {
                if (privateMethods.existsAutoCompleteItem(state.autoCompleteIndex + 1)) {
                    privateMethods.selectAutoCompleteItem(++state.autoCompleteIndex);
                    return;
                }

                if (
                    state.autoCompleteIndex ===
                        document.getElementsByClassName(AUTOCOMPLETE_ITEM_CLASS_NAME).length - 1 &&
                    document.getElementsByClassName(AUTOCOMPLETE_ITEM_CLASS_NAME).length
                ) {
                    privateMethods.selectAutoCompleteItem((state.autoCompleteIndex = 0));
                }
            },
            movePrev() {
                if (privateMethods.existsAutoCompleteItem(state.autoCompleteIndex - 1)) {
                    privateMethods.selectAutoCompleteItem(--state.autoCompleteIndex);
                    return;
                }

                if (
                    [-1, 0].includes(state.autoCompleteIndex) &&
                    document.getElementsByClassName(AUTOCOMPLETE_ITEM_CLASS_NAME).length
                ) {
                    privateMethods.selectAutoCompleteItem(
                        (state.autoCompleteIndex =
                            document.getElementsByClassName(AUTOCOMPLETE_ITEM_CLASS_NAME).length -
                            1)
                    );
                }
            },
            onEsc() {
                privateMethods.resetAutoComplete();
            },
            mouseOverAction(index: number) {
                state.autoCompleteIndex = index;
                if (privateMethods.existsAutoCompleteItem(state.autoCompleteIndex)) {
                    privateMethods.selectAutoCompleteItem(state.autoCompleteIndex);
                }
            },
            onClick(autoCompleteItem: AutoCompleteItem) {
                emit('selected-item', autoCompleteItem);

                privateMethods.resetAutoComplete();
            },
            onSelect() {
                if (privateMethods.existsAutoCompleteItem(state.autoCompleteIndex)) {
                    const item = document.getElementsByClassName(AUTOCOMPLETE_ITEM_CLASS_NAME)[
                        state.autoCompleteIndex
                    ];
                    const selectedItem = props.autoCompleteItems.find(
                        (autocompleteItem) => autocompleteItem.name === item.textContent!.trim()
                    );

                    emit('selected-item', selectedItem!);

                    privateMethods.resetAutoComplete();

                    return;
                }

                const selectedItem = props.autoCompleteItems.find((autocompleteItem) => {
                    const itemName = kanaToHira(autocompleteItem.name).toLowerCase();
                    const inputTerm = kanaToHira(computedMethods.model.value).toLowerCase();
                    return itemName === inputTerm.trim();
                });
                if (selectedItem) {
                    emit('selected-item', selectedItem);

                    privateMethods.resetAutoComplete();
                }
            }
        };

        return {
            state,
            AUTOCOMPLETE_ITEM_CLASS_NAME,
            ...computedMethods,
            ...methods
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/components/index.scss';

$input-width: 240px;

.m-input-text {
    position: relative;
    display: inline-block;

    &__container {
        display: flex;
        justify-content: flex-start;
    }

    &__input {
        &-field {
            @include font-size(16, 24);

            width: $input-width;
            padding: 8px 16px;
            border-radius: 4px;
            border: 1px solid $p-gray-color;
            transition: all 0.3s;

            @media only screen and (max-width: $mobile-border-width) {
                width: 100%;
            }

            &:focus,
            &:hover {
                box-shadow: 0 0 2px 0 $p-form-select;
                border: 1px solid $p-form-select;
                outline: 0;
            }

            &--in-button {
                border-radius: 4px 0 0 4px;
            }

            &--error {
                border-color: $p-error;

                &:focus,
                &:hover {
                    box-shadow: 0 0 2px 0 $p-error;
                    border: 1px solid $p-error;
                }
            }
        }

        &-button {
            border-radius: 0 4px 4px 0;
            width: 40px;
        }
    }

    .autocomplete {
        position: absolute;
        top: 48px;
        left: 0;
        border: 1px solid $p-gray-color;
        border-radius: 4px;
        width: $input-width;
        z-index: 2;
        background: $p-white-color;
        cursor: pointer;

        @media only screen and (max-width: $mobile-border-width) {
            width: 100%;
        }

        &__item {
            padding: 16px;
            border-bottom: 1px solid $p-gray-color;

            &:first-child {
                border-radius: 4px 4px 0 0;
            }

            &:last-child {
                border-radius: 0 0 4px 4px;
                border-bottom: none;
            }

            &.selection {
                background: $p-light-gray-color;
            }
        }
    }
}
</style>
