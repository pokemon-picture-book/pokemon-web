import MColorLabelGroup from '@/components/02-molecules/data-display/m-color-label-group/Index.vue';
import { AColorLabelItem } from '@/components/01-atoms/display/a-color-label';

export default {
    title: 'Molecules/m-color-label-group'
};

export const TypeAndName = () => ({
    components: { MColorLabelGroup },
    data: () => {
        return {
            typeItems: [{ code: 'poison' }, { code: 'grass' }] as AColorLabelItem[]
        };
    },
    template: '<m-color-label-group name="フシギダネ" :type-items="typeItems" />'
});

export const TypeNameAndName = () => ({
    components: { MColorLabelGroup },
    data: () => {
        return {
            typeItems: [
                { code: 'poison', label: 'どく' },
                { code: 'grass', label: 'くさ' }
            ] as AColorLabelItem[]
        };
    },
    template: '<m-color-label-group name="フシギダネ" :type-items="typeItems" />'
});
