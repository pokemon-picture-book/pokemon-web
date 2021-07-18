<template>
    <div class="a-checkbox">
        <template v-for="option in options" :key="option.value">
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
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, SetupContext } from 'vue';
import {
    ACheckboxGroupProps,
    ACheckboxOption,
    ACheckboxValues,
    ACheckboxGroupState
} from '@/types/components/01-atoms/data-entry/ACheckboxGroup';

export default defineComponent({
    props: {
        options: {
            type: Array as PropType<ACheckboxOption[]>,
            default: () => []
        },
        values: {
            type: Array as PropType<ACheckboxValues>,
            default: () => []
        }
    },
    setup(props: ACheckboxGroupProps, { emit }: SetupContext) {
        const state = reactive<ACheckboxGroupState>({
            sources: props.values
        });

        const method = {
            onChange: () => {
                emit('change', state.sources);
            }
        };

        return {
            state,
            ...method
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/color.scss';

@mixin focus-in($color: $p-shadow-color) {
    box-shadow: 0 0 20px $color;
}

@mixin label-color(
    $color: $p-shadow-color,
    $border-color: $p-shadow-color,
    $background-color: $p-white-color
) {
    color: $color;
    border: 3px solid $border-color;
    background-color: $background-color;
}

.a-checkbox {
    display: flex;
    flex-wrap: wrap;

    &__label {
        $this: & !global;

        @include label-color;

        line-height: 1.5;
        width: 30%;
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

        &:hover {
            @include focus-in;
        }

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 10px;
            bottom: 10px;
            left: 10px;
            width: 32px;
            border: 3px solid $p-shadow-color;
            border-radius: 100px;
            transition: background-color 0.2s;
        }

        &.disabled {
            @include label-color($p-white-color, $p-disabled, $p-disabled);

            cursor: default;
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

        &:focus + #{$this} {
            @include focus-in;
        }

        &:checked + #{$this} {
            @include label-color($p-white-color, $p-white-color, $p-primary-color);

            &::before {
                border: 3px solid $p-white-color;
                background-color: $p-white-color;
            }
        }
    }
}
</style>
