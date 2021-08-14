import MModal from '@/components/02-molecules/toggle/MModal.vue';

export default {
    title: 'Molecules/m-modal'
};

export const TypeAndName = () => ({
    components: { MModal },
    data: () => {
        return {
            showModal: false
        };
    },
    template: `
        <button @click="showModal = true">Show Modal</button>
        <!-- use the modal component, pass in the prop -->
        <m-modal :is-show="showModal" @close="showModal = false"></m-modal>
    `
});
