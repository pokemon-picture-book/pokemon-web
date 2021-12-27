<template>
    <div class="o-spinner" :class="[mode]">
        <i class="ib ib-ic-twotone-catching-pokemon ib-spin ib-5x"></i>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { OSpinnerMode } from '@/components/03-organisms/global/o-spinner';

export default defineComponent({
    props: {
        mode: {
            type: String as PropType<OSpinnerMode>,
            default: () => 'default'
        }
    }
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
