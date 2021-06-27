import MPokemonTypeAndName from '@/components/02-molecules/pokemon/MPokemonTypeAndName.vue';
import { ATypeItem } from '@/types/01-atoms/pokemon/AType';

export default {
    title: 'Molecules/m-pokemon-type-and-name'
};

export const TypeAndName = () => ({
    components: { MPokemonTypeAndName },
    data: () => {
        return {
            typeItems: [{ code: 'poison' }, { code: 'grass' }] as ATypeItem[]
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
            ] as ATypeItem[]
        };
    },
    template: '<m-pokemon-type-and-name name="フシギダネ" :type-items="typeItems" />'
});
