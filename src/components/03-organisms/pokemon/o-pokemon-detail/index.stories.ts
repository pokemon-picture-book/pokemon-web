import OPokemonDetail from './Index.vue';
import { OPokemonDetailData } from '@/components/03-organisms/pokemon/o-pokemon-detail';

export default {
    title: 'Organisms/Pokemon/o-pokemon-detail'
};

export const Simple = () => ({
    components: { OPokemonDetail },
    data: () => {
        return {
            data: {
                mainImage: {
                    src: '/img/sample/bulbasaur.png',
                    alt: 'bulbasaur'
                },
                subImage: {
                    src: '/img/sample/bulbasaur-footmark.png',
                    alt: 'bulbasaur-footmark'
                },
                iconImage: {
                    src: '/img/sample/bulbasaur-icon.gif',
                    alt: 'bulbasaur-icon'
                },
                no: 1,
                name: 'フシギダネ',
                genus: 'たねポケモン',
                types: [
                    { code: 'grass', label: 'くさ' },
                    { code: 'poison', label: 'どく' }
                ],
                height: 7,
                weight: 69,
                flavorText:
                    'うまれたときから　せなかにふしぎな　タネが　うえてあってからだと　ともに　そだつという。'
            } as OPokemonDetailData
        };
    },
    template: '<o-pokemon-detail :data="data" />'
});
