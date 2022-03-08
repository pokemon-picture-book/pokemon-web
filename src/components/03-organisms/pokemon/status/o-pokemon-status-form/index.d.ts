export declare type AutoCompleteItem = {
    id: number;
    name: string;
};

export declare type SelectedItem = AutoCompleteItem & {
    canDelete: boolean;
    color: LabelColor;
};
