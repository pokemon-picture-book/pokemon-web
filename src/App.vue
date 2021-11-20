<template>
    <div>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss">
body {
    font-size: 1rem;
    -webkit-font-smoothing: none;
    font-family: 'pokemon-font', monospace;
    margin: 0;
}

a {
    text-decoration: none;
    color: #0bd;

    &:hover {
        color: #0090aa;
    }
}
</style>
