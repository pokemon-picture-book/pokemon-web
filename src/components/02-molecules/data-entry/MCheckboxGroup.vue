<template>
    <fieldset class="m-checkbox-group">
        <template v-for="option in options" :key="option.value">
            <a-checkbox :option="option" v-model="model" @change="onChange" />
        </template>
    </fieldset>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, SetupContext } from 'vue';
import ACheckbox from '@/components/01-atoms/data-entry/ACheckbox.vue';
import { ACheckboxOption, ACheckboxValues } from '@/types/components/01-atoms/data-entry/ACheckbox';

export default defineComponent({
    components: {
        ACheckbox
    },
    props: {
        options: {
            type: Array as PropType<ACheckboxOption[]>,
            default: () => []
        },
        modelValue: {
            type: Array as PropType<ACheckboxValues>,
            default: () => []
        }
    },
    setup(props, { emit }: SetupContext) {
        const method = {
            onChange: (option: ACheckboxOption, checked: boolean) => {
                emit('change', option, checked, props.options);
            }
        };

        const computedMethod = {
            model: computed({
                get: () => props.modelValue,
                set: (newModelValue) => emit('update:modelValue', newModelValue)
            })
        };

        return {
            ...method,
            ...computedMethod
        };
    }
});
</script>

<style lang="scss" scoped>
.m-checkbox-group {
    display: flex;
    flex-wrap: wrap;
    border: none;
}
</style>
