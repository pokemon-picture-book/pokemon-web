import { action } from '@storybook/addon-actions';
import MRadioGroup from '@/components/02-molecules/data-entry/MRadioGroup.vue';
import { ARadioOption } from '@/types/components/01-atoms/data-entry/ARadio';

export default {
    title: 'Molecules/m-radio-group'
};

export const Simple = () => ({
    components: { MRadioGroup },
    data: () => {
        return {
            options: [
                { index: 1, label: '赤/緑/ピカチュウ', value: 'rgby-simple' },
                { index: 2, label: '金/銀/クリスタル', value: 'gsc-simple' },
                { index: 3, label: 'ルビー/サファイア/エメラルド', value: 'rse-simple' },
                { index: 4, label: 'ファイアレッド/リーフグリーン', value: 'frlg-simple' },
                { index: 5, label: 'ダイヤモンド/パール', value: 'dp-simple' },
                { index: 6, label: 'プラチナ', value: 'pt-simple' },
                { index: 7, label: 'ハートゴールド/ソウルシルバー', value: 'hgss-simple' }
            ] as ARadioOption[],
            source: ''
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<m-radio-group :options="options" v-model="source" @change="onChange" />'
});

export const Disabled = () => ({
    components: { MRadioGroup },
    data: () => {
        return {
            options: [
                { index: 11, label: '赤/緑/ピカチュウ', value: 'rgby-disabled' },
                { index: 12, label: '金/銀/クリスタル', value: 'gsc-disabled' },
                { index: 13, label: 'ルビー/サファイア/エメラルド', value: 'rse-disabled' },
                { index: 14, label: 'ファイアレッド/リーフグリーン', value: 'frlg-disabled' },
                { index: 15, label: 'ダイヤモンド/パール', value: 'dp-disabled' },
                { index: 16, label: 'プラチナ', value: 'pt-disabled', disabled: true },
                {
                    index: 17,
                    label: 'ハートゴールド/ソウルシルバー',
                    value: 'hgss-disabled',
                    disabled: true
                }
            ] as ARadioOption[],
            source: ''
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<m-radio-group :options="options" v-model="source" @change="onChange" />'
});

export const SelectValue = () => ({
    components: { MRadioGroup },
    data: () => {
        return {
            options: [
                { index: 21, label: '赤/緑/ピカチュウ', value: 'rgby-select-value' },
                { index: 22, label: '金/銀/クリスタル', value: 'gsc-select-value' },
                { index: 23, label: 'ルビー/サファイア/エメラルド', value: 'rse-select-value' },
                { index: 24, label: 'ファイアレッド/リーフグリーン', value: 'frlg-select-value' },
                { index: 25, label: 'ダイヤモンド/パール', value: 'dp-select-value' },
                { index: 26, label: 'プラチナ', value: 'pt-select-value' },
                { index: 27, label: 'ハートゴールド/ソウルシルバー', value: 'hgss-select-value' }
            ] as ARadioOption[],
            source: 'rgby-select-value'
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<m-radio-group :options="options" v-model="source" @change="onChange" />'
});
