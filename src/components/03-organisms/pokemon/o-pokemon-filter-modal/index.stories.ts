import vueRouter from 'storybook-vue3-router';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/vue3';
import { RouteLocationNormalized } from 'vue-router';
import OPokemonFilterModal from '@/components/03-organisms/pokemon/o-pokemon-filter-modal/Index.vue';
import regionData from '@/stores/http/regions/msw';
import gameVersionGroupData from '@/stores/http/game-version-groups/msw';

export default {
    title: 'Organisms/Pokemon/o-pokemon-filter-modal'
} as Meta;

// Story<PropsParameter>
const Template: Story = (/* args: Record<string, unknown> */) => ({
    components: { OPokemonFilterModal },
    template: `<o-pokemon-filter-modal />`
});

export const Simple = Template.bind({});
Simple.decorators = [
    vueRouter(undefined, (to: RouteLocationNormalized, from: RouteLocationNormalized) =>
        action('ROUTE CHANGED')({ to: to, from: from })
    )
];
Simple.parameters = {
    msw: {
        handlers: [regionData, gameVersionGroupData]
    },
    screenshot: {
        variants: {
            openModal: {
                click: '.o-pokemon-filter-modal > i'
            }
        }
    }
};
