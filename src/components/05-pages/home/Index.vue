<template>
    <Suspense>
        <template #default>
            <o-pokemon-list />
        </template>
        <template #fallback>
            <o-spinner />
        </template>
    </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OSpinner from '@/components/03-organisms/global/OSpinner.vue';
import OPokemonList from '@/components/03-organisms/pokemon/OPokemonList.vue';

export default defineComponent({
    components: {
        OSpinner,
        OPokemonList
    }
});
</script>
