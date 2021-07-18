import { action } from '@storybook/addon-actions';
import ACheckboxGroup from '@/components/01-atoms/data-entry/ACheckboxGroup.vue';
import {
    ACheckboxOption,
    ACheckboxValues
} from '@/types/components/01-atoms/data-entry/ACheckboxGroup';

export default {
    title: 'Atoms/a-checkbox-group'
};

export const Simple = () => ({
    components: { ACheckboxGroup },
    data: () => {
        return {
            options: [
                { label: '赤/緑/ピカチュウ', value: 'rgby' },
                { label: '金/銀/クリスタル', value: 'gsc' },
                { label: 'ルビー/サファイア/エメラルド', value: 'rse' },
                { label: 'ファイアレッド/リーフグリーン', value: 'frlg' },
                { label: 'ダイヤモンド/パール', value: 'dp' },
                { label: 'プラチナ', value: 'pt' },
                { label: 'ハートゴールド/ソウルシルバー', value: 'hgss' }
            ] as ACheckboxOption[]
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<a-checkbox-group :options="options" @change="onChange" />'
});

export const Disabled = () => ({
    components: { ACheckboxGroup },
    data: () => {
        return {
            options: [
                { label: '赤/緑/ピカチュウ', value: 'rgby', disabled: true },
                { label: '金/銀/クリスタル', value: 'gsc', disabled: true },
                { label: 'ルビー/サファイア/エメラルド', value: 'rse' },
                { label: 'ファイアレッド/リーフグリーン', value: 'frlg' },
                { label: 'ダイヤモンド/パール', value: 'dp' },
                { label: 'プラチナ', value: 'pt' },
                { label: 'ハートゴールド/ソウルシルバー', value: 'hgss' }
            ] as ACheckboxOption[]
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<a-checkbox-group :options="options" @change="onChange" />'
});

export const InValue = () => ({
    components: { ACheckboxGroup },
    data: () => {
        return {
            options: [
                { label: '赤/緑/ピカチュウ', value: 'rgby' },
                { label: '金/銀/クリスタル', value: 'gsc' },
                { label: 'ルビー/サファイア/エメラルド', value: 'rse' },
                { label: 'ファイアレッド/リーフグリーン', value: 'frlg' },
                { label: 'ダイヤモンド/パール', value: 'dp' },
                { label: 'プラチナ', value: 'pt' },
                { label: 'ハートゴールド/ソウルシルバー', value: 'hgss' }
            ] as ACheckboxOption[],
            values: ['rgby', 'gsc'] as ACheckboxValues
        };
    },
    methods: {
        onChange: action('change')
    },
    template: `
    <a-checkbox-group
        :options="options"
        :values="values"
        @change="onChange"
    />
    `
});
