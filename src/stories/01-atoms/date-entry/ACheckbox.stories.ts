import { action } from '@storybook/addon-actions';
import ACheckbox from '@/components/01-atoms/data-entry/ACheckbox.vue';
import {
    ACheckboxOption,
    ACheckboxValues
} from '@/types/components/01-atoms/data-entry/ACheckbox';

export default {
    title: 'Atoms/a-checkbox'
};

export const Simple = () => ({
    components: { ACheckbox },
    data: () => {
        return {
            option: { label: '赤/緑/ピカチュウ', value: 'rgby-simple' } as ACheckboxOption,
            sources: [] as ACheckboxValues
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<a-checkbox v-model="sources" :option="option" @change="onChange" />'
});

export const Disabled = () => ({
    components: { ACheckbox },
    data: () => {
        return {
            option: { label: '赤/緑/ピカチュウ', value: 'rgby-disabled', disabled: true } as ACheckboxOption,
            sources: [] as ACheckboxValues
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<a-checkbox v-model="sources" :option="option" @change="onChange" />'
});

export const InValue = () => ({
    components: { ACheckbox },
    data: () => {
        return {
            option: { label: '赤/緑/ピカチュウ', value: 'rgby-in-value' } as ACheckboxOption,
            sources: ['rgby-in-value'] as ACheckboxValues
        };
    },
    methods: {
        onChange: action('change')
    },
    template: '<a-checkbox v-model="sources" :option="option" @change="onChange" />'
});
