<template>
    <div class="a-checkbox">
        <input
            type="checkbox"
            class="a-checkbox__input"
            v-model="model"
            :id="`checkbox-toggle-${option.value}`"
            :value="option.value"
            :disabled="option.disabled"
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
import { computed, defineComponent, PropType, SetupContext } from 'vue';
import { ACheckboxOption, ACheckboxValues } from '@/types/components/01-atoms/data-entry/ACheckbox';

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
    setup(props, { emit }: SetupContext) {
        const methods = {
            onChange: (event: any) => {
                emit('change', props.option, event.target.checked);
            }
        };

        const computedMethods = {
            model: computed({
                get: () => props.modelValue,
                set: (newModelValue) => emit('update:modelValue', newModelValue)
            })
        };

        return {
            ...methods,
            ...computedMethods
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/components/index.scss';

.a-checkbox {
    $this: &;

    width: 50%;

    @media only screen and (max-width: $mobile-border-width) {
        width: 100%;
    }

    &__label {
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

        &:checked + #{$this}__label {
            @include label-color($p-black-color, $p-primary-color, $p-primary-right-color);

            &::before {
                border: 3px solid $p-primary-color;
                background-color: $p-white-color;
            }
        }
    }
}
</style>
