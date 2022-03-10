import { Meta, Story } from '@storybook/vue3';
import MModal from '@/components/02-molecules/toggle/m-modal/Index.vue';

export default {
    title: 'Molecules/m-modal'
} as Meta;

// Story<PropsParameter>
const Template: Story<any> = (args) => ({
    components: { MModal },
    data: () => {
        return {
            showModal: false
        };
    },
    setup() {
        return {
            args
        };
    },
    template: `
        <button class="toggle-button" @click="showModal = true">Show Modal</button>
        <!-- use the modal component, pass in the prop -->
        <m-modal v-bind="args" :is-show="showModal" @close="showModal = false"></m-modal>
    `
});

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Simple.args = {};
Simple.parameters = {
    screenshot: {
        variants: {
            openModal: {
                click: 'button.toggle-button'
            }
        }
    }
};
