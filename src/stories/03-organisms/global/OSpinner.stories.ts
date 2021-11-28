import OSpinner from '@/components/03-organisms/global/o-spinner/Index.vue';

export default {
    title: 'Organisms/Global/o-spinner'
};

export const Simple = () => ({
    components: { OSpinner },
    template: `
    <o-spinner></o-spinner>
    `
});

export const FullScreen = () => ({
    components: { OSpinner },
    template: `
    <o-spinner mode="full-screen"></o-spinner>
    `
});

export const FullWidth = () => ({
    components: { OSpinner },
    template: `
    <o-spinner mode="full-width"></o-spinner>
    `
});
