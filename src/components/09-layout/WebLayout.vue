<template>
    <div>
        <o-header />
    </div>
    <div>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OHeader from '@/components/03-organisms/global/OHeader.vue';

export default defineComponent({
    components: {
        OHeader
    }
});
</script>
