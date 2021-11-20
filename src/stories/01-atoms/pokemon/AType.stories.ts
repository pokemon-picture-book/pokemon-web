import AColorLabel from '@/components/01-atoms/display/AColorLabel.vue';
import { AColorLabelItem } from '@/types/components/01-atoms/display/AColorLabel';

export default {
    title: 'Atoms/a-color-label'
};

export const Simple = () => ({
    components: { AColorLabel },
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
            ] as AColorLabelItem[]
        };
    },
    template: '<a-color-label :items="items" />'
});

export const JapaneseLabel = () => ({
    components: { AColorLabel },
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
            ] as AColorLabelItem[]
        };
    },
    template: '<a-color-label :items="items" />'
});

export const EnglishLabel = () => ({
    components: { AColorLabel },
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
            ] as AColorLabelItem[]
        };
    },
    template: '<a-color-label :items="items" />'
});
