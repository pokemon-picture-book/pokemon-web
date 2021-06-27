<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld
    }
});
</script>

<style lang="scss">
// TODO 勉強用の scss
$baseColor: #1967d3;

@mixin border($color: $baseColor) {
    border-bottom: 1px solid $color;
}

.home {
    @include border;
}

.box {
    margin-top: 15px;
    padding: 10px;
    background-color: #ccc;

    p {
        line-height: 1.3;
    }
}

.contentsBox {
    @extend .box;

    background-color: #eee;
}
</style>
