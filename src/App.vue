<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss">
@import 'destyle.css/destyle.min.css';

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

h2 {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
