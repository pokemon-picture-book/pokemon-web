import { action } from '@storybook/addon-actions';
import MCheckboxGroup from '@/components/02-molecules/data-entry/MCheckboxGroup.vue';
import { ACheckboxOption, ACheckboxValues } from '@/types/components/01-atoms/data-entry/ACheckbox';

export default {
    title: 'Molecules/m-checkbox-group'
};

export const Simple = () => ({
    components: { MCheckboxGroup },
    data: () => {
        return {
            options: [
                { label: '赤/緑/ピカチュウ', value: 'rgby-simple' },
                { label: '金/銀/クリスタル', value: 'gsc-simple' },
                { label: 'ルビー/サファイア/エメラルド', value: 'rse-simple' },
                { label: 'ファイアレッド/リーフグリーン', value: 'frlg-simple' },
                { label: 'ダイヤモンド/パール', value: 'dp-simple' },
                { label: 'プラチナ', value: 'pt-simple' },
                { label: 'ハートゴールド/ソウルシルバー', value: 'hgss-simple' }
            ] as ACheckboxOption[],
            sources: []
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<m-checkbox-group v-model="sources" :options="options" @change="onChange" />'
});

export const Disabled = () => ({
    components: { MCheckboxGroup },
    data: () => {
        return {
            options: [
                { label: '赤/緑/ピカチュウ', value: 'rgby-disabled', disabled: true },
                { label: '金/銀/クリスタル', value: 'gsc-disabled', disabled: true },
                { label: 'ルビー/サファイア/エメラルド', value: 'rse-disabled' },
                { label: 'ファイアレッド/リーフグリーン', value: 'frlg-disabled' },
                { label: 'ダイヤモンド/パール', value: 'dp-disabled' },
                { label: 'プラチナ', value: 'pt-disabled' },
                { label: 'ハートゴールド/ソウルシルバー', value: 'hgss-disabled' }
            ] as ACheckboxOption[],
            sources: []
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<m-checkbox-group v-model="sources" :options="options" @change="onChange" />'
});

export const InValue = () => ({
    components: { MCheckboxGroup },
    data: () => {
        return {
            options: [
                { label: '赤/緑/ピカチュウ', value: 'rgby-in-value' },
                { label: '金/銀/クリスタル', value: 'gsc-in-value' },
                { label: 'ルビー/サファイア/エメラルド', value: 'rse-in-value' },
                { label: 'ファイアレッド/リーフグリーン', value: 'frlg-in-value' },
                { label: 'ダイヤモンド/パール', value: 'dp-in-value' },
                { label: 'プラチナ', value: 'pt-in-value' },
                { label: 'ハートゴールド/ソウルシルバー', value: 'hgss-in-value' }
            ] as ACheckboxOption[],
            sources: ['rgby-in-value', 'gsc-in-value'] as ACheckboxValues
        };
    },
    methods: {
        onChange: action('change')
    },
    template: `
    <m-checkbox-group
        :options="options"
        v-model="sources"
        @change="onChange"
    />
    `
});
