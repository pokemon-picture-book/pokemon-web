import { Story } from '@storybook/vue3';
import AButton from '@/components/01-atoms/general/a-button/Index.vue';
import { ButtonTheme, ButtonIcon, ButtonType } from '@/components/01-atoms/general/a-button';

type Props = {
    type: ButtonType;
    theme: ButtonTheme;
    icon: ButtonIcon;
    disabled: boolean;
};

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Atoms/a-button',
    component: AButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        onClick: {},
        type: {
            control: { type: 'select' },
            options: ['button', 'submit']
        },
        theme: {
            control: { type: 'select' },
            options: ['primary', 'default', 'pager']
        },
        icon: {
            control: { type: 'select' },
            options: ['none', 'prev', 'next', 'search', 'add']
        }
    }
};

const Template: Story<Props> = (args) => ({
    components: { AButton },
    setup() {
        return { args };
    },
    template: '<a-button v-bind="args">Button</a-button>'
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    type: 'button',
    theme: 'primary',
    icon: 'none'
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};

const IconTemplate: Story<Props> = (args) => ({
    components: { AButton },
    setup() {
        return { args };
    },
    template: `<a-button v-bind="args" style="{ width: 'auto' }" />`
});

export const Icon = IconTemplate.bind({});
Icon.args = {
    type: 'button',
    theme: 'primary',
    icon: 'search'
};
