<template>
    <div class="o-spinner">
        <i class="ib ib-ic-twotone-catching-pokemon ib-spin ib-5x"></i>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

.o-spinner {
    width: 100vw;
    height: 90vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>