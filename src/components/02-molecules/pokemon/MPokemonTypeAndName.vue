<template>
    <div class="m-pokemon-type-and-name">
        <a-type :items="typeItems" />
        <span class="m-pokemon-type-and-name__name">{{ name }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AType from '@/components/01-atoms/pokemon/AType.vue';
import { ATypeItem } from 'types/pokemon/type';

/**
 * ポケモン名称.
 */
export default defineComponent({
    components: {
        AType
    },
    props: {
        typeItems: {
            type: Array as PropType<ATypeItem[]>,
            default: []
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

    &__name {
        margin: 8px;
    }
}
</style>
