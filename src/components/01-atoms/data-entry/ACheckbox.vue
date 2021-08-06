<template>
    <div class="a-checkbox">
        <input
            type="checkbox"
            class="a-checkbox__input"
            :id="`checkbox-toggle-${option.value}`"
            :value="option.value"
            :disabled="option.disabled"
            v-model="state.sources"
            @change="onChange"
        />
        <label
            class="a-checkbox__label"
            :for="`checkbox-toggle-${option.value}`"
            :class="{ disabled: option.disabled }"
        >
            {{ option.label }}
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, SetupContext, watch } from 'vue';
import {
    ACheckboxOption,
    ACheckboxProps,
    ACheckboxState,
    ACheckboxValues
} from '@/types/components/01-atoms/data-entry/ACheckbox';

export default defineComponent({
    props: {
        modelValue: {
            type: Array as PropType<ACheckboxValues>,
            default: () => []
        },
        option: {
            type: Object as PropType<ACheckboxOption>,
            default: () => {}
        }
    },
    setup(props: ACheckboxProps, { emit }: SetupContext) {
        const state = reactive<ACheckboxState>({
            sources: [...props.modelValue]
        });

        const method = {
            onChange: () => {
                emit('update:modelValue', state.sources);
                emit('change', state.sources);
            }
        };

        watch(
            () => props.modelValue,
            (newValue: ACheckboxValues) => (state.sources = [...newValue])
        );

        return {
            state,
            ...method
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/color.scss';

.a-checkbox {
    width: 50%;

    &__label {
        $this: & !global;

        @include label-color;

        line-height: 1.5;
        margin: 16px;
        display: block;
        position: relative;
        padding: 16px 32px 16px 64px;
        border-radius: 100px;
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
        transition: background-color 0.2s, box-shadow 0.2s;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis; /* Safari */
        -o-text-overflow: ellipsis; /* Opera */

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 10px;
            bottom: 10px;
            left: 10px;
            width: 32px;
            border: 3px solid $p-gray-color;
            border-radius: 100px;
            transition: background-color 0.2s;
        }

        &.disabled {
            @include label-color($p-white-color, $p-disabled, $p-disabled);

            cursor: default;
            pointer-events: none;
            opacity: 0.3;

            &:hover {
                box-shadow: none;
            }

            &::before {
                border: 3px solid $p-white-color;
            }
        }
    }

    &__input {
        display: none;

        &:checked + #{$this} {
            @include label-color($p-black-color, $p-primary-color, $p-primary-right-color);

            &::before {
                border: 3px solid $p-primary-color;
                background-color: $p-white-color;
            }
        }
    }
}
</style>
