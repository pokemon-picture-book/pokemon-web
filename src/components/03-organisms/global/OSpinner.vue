<template>
    <div class="o-spinner" :class="[mode]">
        <i class="ib ib-ic-twotone-catching-pokemon ib-spin ib-5x"></i>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { OSpinnerMode } from '@/types/components/03-organisms/global/OSpinner';

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
@import '@/assets/style/index.scss';

.o-spinner {
    &.full-screen {
        width: 100vw;
        height: 90vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.full-width {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
