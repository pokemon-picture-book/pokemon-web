import vueRouter from 'storybook-vue3-router';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/vue3';
import { RouteLocationNormalized } from 'vue-router';
import OHeader from '@/components/03-organisms/global/o-header/Index.vue';
import languageData from '@/stores/http/pokemon-api/v1/game-version-groups/msw';
import regionData from '@/stores/http/pokemon-api/v1/regions/msw';
import gameVersionGroupData from '@/stores/http/pokemon-api/v1/game-version-groups/msw';

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
Simple.parameters = {
    msw: {
        handlers: [languageData, regionData, gameVersionGroupData]
    }
};
