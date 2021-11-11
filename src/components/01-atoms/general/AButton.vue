<template>
    <button type="button" class="a-button" :class="[color, { disabled }]">
        <slot>Button</slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ButtonColor } from '@/types/components/01-atoms/general/AButton';

export default defineComponent({
    props: {
        color: {
            type: String as PropType<ButtonColor>,
            default: () => 'default' as ButtonColor
        },
        disabled: {
            type: Boolean,
            default: () => false
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/color.scss';

.a-button {
    position: relative;
    display: inline-block;
    padding: 16px;
    text-decoration: none;
    border-style: hidden;
    border-radius: 32px;
    box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
    font-weight: bold;

    /** color default */
    &.default {
        color: $p-black-color;
        background: $p-light-gray-color;
        border-color: $p-light-gray-color;
        border-bottom: solid 2px $p-light-gray-line-color;

        &:active {
            border-bottom: solid 2px $p-light-gray-color;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        }
    }

    /** color primary */
    &.primary {
        color: $p-white-color;
        background: $p-primary-color;
        border-color: $p-primary-color;
        border-bottom: solid 2px $p-primary-deep-color;

        &:active {
            border-bottom: solid 2px $p-primary-color;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        }
    }

    &.disabled {
        cursor: default;
        pointer-events: none;
        color: $p-white-color;
        opacity: 0.3;
        background: $p-disabled;
        border-bottom: solid 2px $p-disabled;
    }
}
</style>
