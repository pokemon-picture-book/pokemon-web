export declare type ACheckboxValues = unknown[];

export declare type ACheckboxOption = {
    label: string;
    value: ACheckboxValues[number];
    disabled?: boolean;
};

export declare type ACheckboxProps = {
    option: ACheckboxOption;
    modelValue: ACheckboxValues;
};

export declare type ACheckboxState = {
    sources: ACheckboxValues;
};
