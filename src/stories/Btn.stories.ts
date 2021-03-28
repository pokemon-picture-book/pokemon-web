import Button from '@/components/Button.vue';

export default {
    title: 'Button'
};

export const BasicButton = () => ({
    components: { Button },
    template: '<Button/>'
});

export const SampleButton = () => ({
    components: { Button },
    template: '<Button :msg="\'Sample Button\'" />'
});
