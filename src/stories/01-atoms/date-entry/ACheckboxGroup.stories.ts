import { action } from '@storybook/addon-actions';
import ACheckboxGroup from '@/components/01-atoms/data-entry/ACheckboxGroup.vue';
import {
    ACheckboxOption,
    ACheckboxValues
} from '@/types/components/01-atoms/data-entry/ACheckbox';

export default {
    title: 'Atoms/a-checkbox-group'
};

export const Simple = () => ({
    components: { ACheckboxGroup },
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
    template: '<a-checkbox-group v-model="sources" :options="options" @change="onChange" />'
});

export const Disabled = () => ({
    components: { ACheckboxGroup },
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
    template: '<a-checkbox-group v-model="sources" :options="options" @change="onChange" />'
});

export const InValue = () => ({
    components: { ACheckboxGroup },
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
    <a-checkbox-group
        :options="options"
        v-model="sources"
        @change="onChange"
    />
    `
});
