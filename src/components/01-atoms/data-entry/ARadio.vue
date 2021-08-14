<template>
    <div class="a-radio">
        <input
            :id="`item-${option.index}`"
            class="a-radio__input"
            type="radio"
            name="a-radio-field"
            :value="option.value"
            :disabled="option.disabled"
            v-model="state.source"
            @change="onChange"
        />
        <label
            class="a-radio__label"
            :class="{ disabled: option.disabled }"
            :for="`item-${option.index}`"
        >
            {{ option.label }}
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, SetupContext, watch } from 'vue';
import {
    ARadioOption,
    ARadioProps,
    ARadioState
} from '@/types/components/01-atoms/data-entry/ARadio';

export default defineComponent({
    props: {
        option: {
            type: Object as PropType<ARadioOption>,
            default: () => {}
        },
        modelValue: {
            type: String,
            default: () => ''
        }
    },
    setup(props: ARadioProps, { emit }: SetupContext) {
        const state = reactive<ARadioState>({
            source: props.modelValue
        });

        const method = {
            onChange: () => {
                emit('update:modelValue', state.source);
                emit('change', state.source);
            }
        };

        watch(
            () => props.modelValue,
            (newValue: string) => (state.source = newValue)
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

.a-radio {
    width: 50%;

    &__input {
        display: none;
    }

    &__label {
        @include label-color;

        display: block;
        padding: 16px;
        margin: 16px;
        border-radius: 10px;
        transition: all 0.2s;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis; /* Safari */
        -o-text-overflow: ellipsis; /* Opera */

        &.disabled {
            @include label-color($p-white-color, $p-disabled, $p-disabled);

            cursor: default;
            pointer-events: none;
            opacity: 0.3;
        }
    }

    &__input:checked + &__label {
        @include label-color($p-black-color, $p-primary-color, $p-primary-right-color);

        text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
    }
}
</style>
