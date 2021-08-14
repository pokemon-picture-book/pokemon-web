<template>
    <Suspense>
        <template #default>
            <div>
                <o-header />
                <router-view />
            </div>
        </template>
        <template #fallback>
            <o-spinner />
        </template>
    </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OHeader from '@/components/03-organisms/global/OHeader.vue';
import OSpinner from '@/components/03-organisms/global/OSpinner.vue';

export default defineComponent({
    components: {
        OHeader,
        OSpinner
    }
});
</script>
