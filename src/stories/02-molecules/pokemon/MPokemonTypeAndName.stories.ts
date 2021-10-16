import MPokemonTypeAndName from '@/components/02-molecules/pokemon/MPokemonTypeAndName.vue';
import { AColorLabelItem } from '@/types/components/01-atoms/display/AColorLabel';

export default {
    title: 'Molecules/m-pokemon-type-and-name'
};

export const TypeAndName = () => ({
    components: { MPokemonTypeAndName },
    data: () => {
        return {
            typeItems: [{ code: 'poison' }, { code: 'grass' }] as AColorLabelItem[]
        };
    },
    template: '<m-pokemon-type-and-name name="フシギダネ" :type-items="typeItems" />'
});

export const TypeNameAndName = () => ({
    components: { MPokemonTypeAndName },
    data: () => {
        return {
            typeItems: [
                { code: 'poison', label: 'どく' },
                { code: 'grass', label: 'くさ' }
            ] as AColorLabelItem[]
        };
    },
    template: '<m-pokemon-type-and-name name="フシギダネ" :type-items="typeItems" />'
});
