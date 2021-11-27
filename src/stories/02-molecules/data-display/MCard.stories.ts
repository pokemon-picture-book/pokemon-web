import MCard from '@/components/02-molecules/data-display/MCard.vue';

export default {
    title: 'Molecules/m-card'
};

export const Simple = () => ({
    components: { MCard },
    template: `
    <m-card style="width: 350px;">
        Main Contains
    </m-card>
    `
});

export const ImageSample = () => ({
    components: { MCard },
    template: `
    <m-card style="width: 350px;" :img="{ src: '/img/pokemon.jpg', alt: 'pokemon', isFull: true }">
        <span>Pokemon</span>
    </m-card>
    `
});

export const FooterSample = () => ({
    components: { MCard },
    template: `
    <m-card style="width: 350px;" :img="{ src: '/img/pokemon.jpg', alt: 'pokemon', isFull: true }">
        <span>Pokemon</span>
        <template #footer>
            <a src="#">action1</a>
            <a src="#">action2</a>
        </template>
    </m-card>
    `
});
