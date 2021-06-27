import { withKnobs, select } from '@storybook/addon-knobs';
import ASelect from '@/components/01-atoms/data-entry/ASelect.vue';
import { ASelectItem } from '@/types/01-atoms/data-entry/ASelect';

export default {
    title: 'Atoms/a-select',
    decorators: [withKnobs]
};

export const Knobs = () => ({
    components: { ASelect },
    data: () => {
        return {
            items: [
                { id: 1, label: '日本語', value: 'ja' },
                { id: 2, label: 'English', value: 'en' }
            ] as ASelectItem[]
        };
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
            )
        },
        size: {
            default: select(
                'Size',
                {
                    'X-Small': 'x-small',
                    Small: 'small',
                    Default: 'default',
                    Large: 'large',
                    'X-Large': 'x-large'
                },
                'default'
            )
        }
    },
    template: '<a-select :items="items" :size="size" :color="color" />'
});

export const Simple = () => ({
    components: { ASelect },
    template: '<a-select />'
});

export const Source = () => ({
    components: { ASelect },
    data: () => {
        const items: ASelectItem[] = [
            { id: 1, label: '日本語', value: 'ja' },
            { id: 2, label: 'English', value: 'en' }
        ];
        return {
            items,
            source: items[0]
        };
    },
    methods: {
        updateSource: (newSource: ASelectItem) => newSource
    },
    template: '<a-select :items="items" v-model:source="source" @select="updateSource" />'
});
