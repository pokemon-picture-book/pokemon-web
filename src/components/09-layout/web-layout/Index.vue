<template>
    <o-header :query-param="queryParam" @to-home="toHome" />
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
import { useRoute, useRouter } from 'vue-router';
import OHeader from '@/components/03-organisms/global/o-header/Index.vue';
import OSpinner from '@/components/03-organisms/global/o-spinner/Index.vue';
import { usePokemonStore } from '@/stores/http/pokemon-api/v1/pokemons';
import { useSearchPokemonParamStore } from '@/stores/search/pokemon-param';

export default defineComponent({
    components: {
        OHeader,
        OSpinner
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const pokemonStore = usePokemonStore();
        const searchParamStore = useSearchPokemonParamStore();

        const computedMethods = {
            queryParam: computed(() => route.query)
        };

        const methods = {
            toHome() {
                searchParamStore.setGame(route.query.game as string);
                searchParamStore.setRegions(route.query.regions as string[]);
                searchParamStore.setInfiniteIndex(1);

                if (route.path !== '/pokemons') {
                    pokemonStore.reset();

                    router.push({
                        path: '/pokemons',
                        query: {
                            game: searchParamStore.game,
                            regions: searchParamStore.regions
                        }
                    });
                }
            }
        };

        return {
            ...computedMethods,
            ...methods
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/components/index.scss';

.main-content {
    padding: 16px;

    @media only screen and (max-width: $mobile-border-width) {
        padding: 16px 8px;
    }
}
</style>
