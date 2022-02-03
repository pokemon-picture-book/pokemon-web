<template>
    <label class="a-label" :class="[`a-label--${color}`]">
        <slot>label text</slot>
        <close-svg v-if="canDelete" class="a-label__icon" @click="onClose" />
    </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { LabelColor } from '@/components/01-atoms/display/a-label';
import CloseSvg from '@/assets/img/components/close.svg?component';

export default defineComponent({
    components: {
        CloseSvg
    },
    props: {
        color: {
            type: String as PropType<LabelColor>,
            default: () => 'default' as LabelColor
        },
        canDelete: {
            type: Boolean,
            default: () => false
        }
    },
    setup(_, { emit }) {
        const methods = {
            onClose() {
                emit('close');
            }
        };

        return {
            ...methods
        };
    }
});
</script>

<style lang="scss" scoped>
.a-label {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    border-radius: 8px;

    &__icon {
        width: 16px;
        margin-left: 16px;
        cursor: pointer;
    }

    &--red {
        border: 3px solid rgb(255, 0, 0);
        background: rgb(255, 0, 0, 0.4);
    }

    &--green {
        border: 3px solid rgb(0, 255, 0);
        background: rgb(0, 255, 0, 0.4);
    }

    &--blue {
        border: 3px solid rgb(0, 0, 255);
        background: rgb(0, 0, 255, 0.4);
    }
}
</style>
