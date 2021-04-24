import { withKnobs, select } from '@storybook/addon-knobs'
import PSelect from '@/components/01-atoms/data-entry/PSelect.vue';
import { PSelectItem } from 'types/date-entry/select';

export default {
    title: 'Atoms/p-select',
    decorators: [withKnobs],
};

const items: PSelectItem[] = [
    { id: 1, label: '日本語', value: 'ja' },
    { id: 2, label: 'English', value: 'en' }
]

export const Knobs = () => ({
    components: { PSelect },
    data: () => {
        return {
            items
        }
    },
    props: {
        color: {
            default: select(
                'Color',
                {
                    Primary: 'primary',
                    Default: 'default'
                },
                'default'
            ),
        },
        size: {
            default: select(
                'Size',
                {
                    'X-Small': 'x-small',
                    Small: 'small',
                    Default: 'default',
                    Large: 'large',
                    'X-Large': 'x-large',
                },
                'default'
            ),
        },
    },
    template: '<p-select :items="items" :size="size" :color="color" />',
});

export const Simple = () => ({
    components: { PSelect },
    template: '<p-select />'
});

export const Source = () => ({
    components: { PSelect },
    data: () => {
        return {
            items,
            source: items[0]
        }
    },
    methods: {
        updateSource: (newSource: PSelectItem) => newSource
    },
    template: '<p-select :items="items" v-model:source="source" @select="updateSource" />'
});

export const DefaultValue = () => ({
    components: { PSelect },
    data: () => {
        return {
            items,
            defaultValue: items[0]
        }
    },
    template: '<p-select :items="items" :defaultValue="defaultValue" />'
});
