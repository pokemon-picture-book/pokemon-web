<template>
    <Suspense>
        <template #default>
            <div>
                <o-header />
                <router-view />
            </div>
        </template>
        <template #fallback>
            <o-spinner mode="full-screen" />
        </template>
    </Suspense>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { LocationQueryValue, useRoute } from 'vue-router';
import OHeader from '@/components/03-organisms/global/OHeader.vue';
import OSpinner from '@/components/03-organisms/global/OSpinner.vue';

export default defineComponent({
    components: {
        OHeader,
        OSpinner
    },
    setup() {
        const route = useRoute();

        const computedMethods = {
            queryParam: computed(() => route.query)
        };

        return {
            ...computedMethods
        };
    }
});
</script>
