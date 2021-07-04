import OPokemonList from '@/components/03-organisms/pokemon/OPokemonList.vue';

export default {
    title: 'Organisms/Pokemon/o-pokemon-list'
};

export const Simple = () => ({
    components: { OPokemonList },
    template: `
    <o-pokemon-list></o-pokemon-list>
    `
});