<template>
    <o-header :query-param="queryParam" />
    <Suspense>
        <template #default>
            <div class="main-content">
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
import { useRoute } from 'vue-router';
import OHeader from '@/components/03-organisms/global/o-header/Index.vue';
import OSpinner from '@/components/03-organisms/global/o-spinner/Index.vue';

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

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

.main-content {
    padding: 16px;

    @media only screen and (max-width: $mobile-border-width) {
        padding: 16px 8px;
    }
}
</style>
