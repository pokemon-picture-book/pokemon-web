import PType from '@/components/01-atoms/pokemon/PType.vue';

export default {
    title: 'Atoms/p-type'
};

export const Simple = () => ({
    components: { PType },
    data: () => {
        return {
            items: [
                { code: 'normal' },
                { code: 'fighting' },
                { code: 'flying' },
                { code: 'poison' },
                { code: 'ground' },
                { code: 'rock' },
                { code: 'bug' },
                { code: 'ghost' },
                { code: 'steel' },
                { code: 'fire' },
                { code: 'water' },
                { code: 'grass' },
                { code: 'electric' },
                { code: 'psychic' },
                { code: 'ice' },
                { code: 'dragon' },
                { code: 'dark' },
                { code: 'fairy' }
            ]
        }
    },
    template: '<p-type :items="items" />',
});

export const JapaneseLabel = () => ({
    components: { PType },
    data: () => {
        return {
            items: [
                { code: 'normal', label: 'ノーマル' },
                { code: 'fighting', label: 'かくとう' },
                { code: 'flying', label: 'ひこう' },
                { code: 'poison', label: 'どく' },
                { code: 'ground', label: 'じめん' },
                { code: 'rock', label: 'いわ' },
                { code: 'bug', label: 'むし' },
                { code: 'ghost', label: 'ゴースト' },
                { code: 'steel', label: 'はがね' },
                { code: 'fire', label: 'ほのお' },
                { code: 'water', label: 'みず' },
                { code: 'grass', label: 'くさ' },
                { code: 'electric', label: 'でんき' },
                { code: 'psychic', label: 'エスパー' },
                { code: 'ice', label: 'こおり' },
                { code: 'dragon', label: 'ドラゴン' },
                { code: 'dark', label: 'あく' },
                { code: 'fairy', label: 'フェアリー' }
            ]
        }
    },
    template: '<p-type :items="items" />',
});

export const EnglishLabel = () => ({
    components: { PType },
    data: () => {
        return {
            items: [
                { code: 'normal', label: 'Normal' },
                { code: 'fighting', label: 'Fighting' },
                { code: 'flying', label: 'Flying' },
                { code: 'poison', label: 'Poison' },
                { code: 'ground', label: 'Ground' },
                { code: 'rock', label: 'Rock' },
                { code: 'bug', label: 'Bug' },
                { code: 'ghost', label: 'Ghost' },
                { code: 'steel', label: 'Steel' },
                { code: 'fire', label: 'Fire' },
                { code: 'water', label: 'Water' },
                { code: 'grass', label: 'Grass' },
                { code: 'electric', label: 'Electric' },
                { code: 'psychic', label: 'Psychic' },
                { code: 'ice', label: 'Ice' },
                { code: 'dragon', label: 'Dragon' },
                { code: 'dark', label: 'Dark' },
                { code: 'fairy', label: 'Fairy' }
            ]
        }
    },
    template: '<p-type :items="items" />',
});