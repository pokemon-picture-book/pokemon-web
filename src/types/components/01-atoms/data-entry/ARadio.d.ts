export declare type ARadioOption = {
    index: number;
    label: string;
    value: string;
    disabled?: boolean;
};

export declare type ARadioProps = {
    option: ARadioOption;
    modelValue: string;
};

export declare type ARadioState = {
    source: string;
};
