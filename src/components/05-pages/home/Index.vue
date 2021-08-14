<template>
    <o-pokemon-list />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OPokemonList from '@/components/03-organisms/pokemon/OPokemonList.vue';

export default defineComponent({
    components: {
        OPokemonList
    }
});
</script>
