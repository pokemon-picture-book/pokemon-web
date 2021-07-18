import {
    ACheckboxOption,
    ACheckboxValues
} from '@/types/components/01-atoms/data-entry/ACheckbox';

export declare type ACheckboxGroupProps = {
    options: ACheckboxOption[];
    modelValue: ACheckboxValues;
};

export declare type ACheckboxGroupState = {
    sources: ACheckboxValues;
};
