import {
    ACheckboxOption,
    ACheckboxValues
} from '@/types/components/01-atoms/data-entry/ACheckbox';

export declare type MCheckboxGroupProps = {
    options: ACheckboxOption[];
    modelValue: ACheckboxValues;
};

export declare type MCheckboxGroupState = {
    sources: ACheckboxValues;
};
