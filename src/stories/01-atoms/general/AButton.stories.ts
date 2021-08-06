import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import AButton from '@/components/01-atoms/general/AButton.vue';

export default {
    title: 'Atoms/a-button',
    decorators: [withKnobs]
};

export const Simple = () => ({
    components: { AButton },
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
        disabled: {
            default: select(
                'Disabled',
                {
                    True: true,
                    False: false
                },
                false
            )
        }
    },
    methods: {
        onClick: action('click')
    },
    template: '<a-button :color="color" :disabled="disabled" @click="onClick" />'
});

export const Disabled = () => ({
    components: { AButton },
    template: '<a-button :disabled="true" />'
});
