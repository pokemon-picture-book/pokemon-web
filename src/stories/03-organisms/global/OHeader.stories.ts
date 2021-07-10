import OHeader from '@/components/03-organisms/global/OHeader.vue';

export default {
    title: 'Organisms/Global/o-header'
};

export const Simple = () => ({
    components: { OHeader },
    template: `
    <o-header></o-header>
    `
});
