import OPokemonEvolution from './Index.vue';
import { OPokemonEvolutionItem } from 'src/components/03-organisms/pokemon/o-pokemon-evolution';

export default {
    title: 'Organisms/Pokemon/o-pokemon-evolution'
};

export const Simple = () => ({
    components: { OPokemonEvolution },
    data: () => {
        return {
            targetId: 1,
            data: [
                {
                    id: 1,
                    pokemonName: 'フシギダネ',
                    types: [
                        { code: 'grass', label: 'くさ' },
                        { code: 'poison', label: 'どく' }
                    ],
                    gameImagePath: '/img/sample/bulbasaur.png'
                },
                {
                    id: 2,
                    pokemonName: 'フシギソウ',
                    types: [
                        { code: 'grass', label: 'くさ' },
                        { code: 'poison', label: 'どく' }
                    ],
                    gameImagePath: '/img/sample/ivysaur.png'
                },
                {
                    id: 3,
                    pokemonName: 'フシギバナ',
                    types: [
                        { code: 'grass', label: 'くさ' },
                        { code: 'poison', label: 'どく' }
                    ],
                    gameImagePath: '/img/sample/venusaur.png'
                }
            ] as (OPokemonEvolutionItem | OPokemonEvolutionItem[])[]
        };
    },
    template: '<o-pokemon-evolution :data="data" :target-id="targetId" />'
});

export const MultiEvolution = () => ({
    components: { OPokemonEvolution },
    data: () => {
        return {
            targetId: 133,
            data: [
                {
                    id: 133,
                    pokemonName: 'イーブイ',
                    types: [{ code: 'normal', label: 'ノーマル' }],
                    gameImagePath: '/img/sample/133Eevee.png'
                },
                [
                    {
                        id: 134,
                        pokemonName: 'シャワーズ',
                        types: [{ code: 'water', label: 'みず' }],
                        gameImagePath: '/img/sample/134Vaporeon.png'
                    },
                    {
                        id: 135,
                        pokemonName: 'サンダース',
                        types: [{ code: 'electric', label: 'でんき' }],
                        gameImagePath: '/img/sample/135Jolteon.png'
                    },
                    {
                        id: 136,
                        pokemonName: 'ブースター',
                        types: [{ code: 'fire', label: 'ほのお' }],
                        gameImagePath: '/img/sample/136Flareon.png'
                    }
                ]
            ]
        };
    },
    template: '<o-pokemon-evolution :data="data" :target-id="targetId" />'
});

export const NoEvolution = () => ({
    components: { OPokemonEvolution },
    data: () => {
        return {
            targetId: 1,
            data: []
        };
    },
    template: '<o-pokemon-evolution :data="data" :target-id="targetId" />'
});
