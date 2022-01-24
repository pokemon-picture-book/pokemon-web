import { Story } from '@storybook/vue3';
import OPokemonStatusChart from '@/components/03-organisms/pokemon/status/o-pokemon-status-chart/Index.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Organisms/Pokemon/Status/o-pokemon-status-chart',
    component: OPokemonStatusChart,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        width: {
            name: 'width',
            type: { name: 'string', required: false },
            defaultValue: '400px',
            description: 'input width',
            control: {
                type: 'text'
            }
        },
        datasets: {
            name: 'datasets',
            type: { name: 'array', required: false },
            defaultValue: [
                {
                    label: 'フシギダネ',
                    data: [45, 49, 65, 45, 65, 49]
                },
                {
                    label: 'フシギソウ',
                    data: [60, 62, 80, 60, 80, 63]
                },
                {
                    label: 'フシギバナ',
                    data: [80, 82, 100, 80, 100, 83]
                }
            ],
            description: 'input dataset'
        }
    }
};

const Template: Story<any> = (args) => ({
    components: { OPokemonStatusChart },
    setup() {
        return { args };
    },
    template: '<o-pokemon-status-chart v-bind="args"></o-pokemon-status-chart>'
});

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Simple.args = {};
