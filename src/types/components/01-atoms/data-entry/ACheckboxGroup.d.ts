export declare type ACheckboxValues = unknown[];

export declare type ACheckboxOption = {
    label: string;
    value: Value;
    disabled?: boolean;
};

export declare type ACheckboxGroupProps = {
    options: Option[];
    values: Value[];
};

export declare type ACheckboxGroupState = {
    sources: ACheckboxValues;
};
