import { action } from '@storybook/addon-actions';
import ARadio from '@/components/01-atoms/data-entry/ARadio.vue';
import { ARadioOption } from '@/types/components/01-atoms/data-entry/ARadio';

export default {
    title: 'Atoms/a-radio'
};

export const Simple = () => ({
    components: { ARadio },
    data: () => {
        return {
            option: { index: 1, label: '赤/緑/ピカチュウ', value: 'rgby-simple' } as ARadioOption,
            source: ''
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<a-radio v-model="source" :option="option" @change="onChange" />'
});

export const Disabled = () => ({
    components: { ARadio },
    data: () => {
        return {
            option: {
                index: 1,
                label: '赤/緑/ピカチュウ',
                value: 'rgby-disabled',
                disabled: true
            } as ARadioOption,
            source: ''
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<a-radio v-model="source" :option="option" @change="onChange" />'
});

export const InValue = () => ({
    components: { ARadio },
    data: () => {
        return {
            option: { index: 1, label: '赤/緑/ピカチュウ', value: 'rgby-in-value' } as ARadioOption,
            source: 'rgby-in-value'
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<a-radio v-model="source" :option="option" @change="onChange" />'
});
