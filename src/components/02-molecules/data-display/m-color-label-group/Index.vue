<template>
    <div class="m-color-label-group">
        <a-color-label :items="typeItems" />
        <div class="m-color-label-group__name">{{ name }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AColorLabel from '@/components/01-atoms/display/a-color-label/Index.vue';
import { AColorLabelItem } from '@/components/01-atoms/display/a-color-label';

/**
 * ポケモン名称.
 */
export default defineComponent({
    components: {
        AColorLabel
    },
    props: {
        typeItems: {
            type: Array as PropType<AColorLabelItem[]>,
            default: () => []
        },
        name: {
            type: String,
            default: 'undefined'
        }
    }
});
</script>

<style lang="scss" scoped>
.m-color-label-group {
    display: flex;
    align-items: center;
    flex-direction: column;

    &__name {
        margin: 8px;
    }
}
</style>
