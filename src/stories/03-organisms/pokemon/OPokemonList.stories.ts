import OPokemonList from '@/components/03-organisms/pokemon/OPokemonList.vue';
import OSpinner from '@/components/03-organisms/global/OSpinner.vue';

export default {
    title: 'Organisms/Pokemon/o-pokemon-list'
};

export const Simple = () => ({
    components: { OPokemonList, OSpinner },
    template: `
    <Suspense>
        <template #default>
            <o-pokemon-list />
        </template>
        <template #fallback>
            <o-spinner />
        </template>
    </Suspense>
    `
});
