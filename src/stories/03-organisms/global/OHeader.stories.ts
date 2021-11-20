import vueRouter from 'storybook-vue3-router';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/vue3';
import { RouteLocationNormalized } from 'vue-router';
import OHeader from '@/components/03-organisms/global/OHeader.vue';

export default {
    title: 'Organisms/Global/o-header'
} as Meta;

// Story<PropsParameter>
const Template: Story = (/* args: Record<string, unknown> */) => ({
    components: { OHeader },
    template: `<o-header />`
});

export const Simple = Template.bind({});
Simple.decorators = [
    vueRouter(undefined, (to: RouteLocationNormalized, from: RouteLocationNormalized) =>
        action('ROUTE CHANGED')({ to: to, from: from })
    )
];
