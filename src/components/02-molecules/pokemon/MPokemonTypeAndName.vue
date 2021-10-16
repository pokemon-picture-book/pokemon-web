<template>
    <div class="m-pokemon-type-and-name">
        <a-color-label :items="typeItems" />
        <div class="m-pokemon-type-and-name__name">{{ name }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AColorLabel from '@/components/01-atoms/display/AColorLabel.vue';
import { AColorLabelItem } from '@/types/components/01-atoms/display/AColorLabel';

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
.m-pokemon-type-and-name {
    display: flex;
    align-items: center;
    flex-direction: column;

    &__name {
        margin: 8px;
    }
}
</style>
