<template>
    <div class="a-checkbox-group">
        <template v-for="option in options" :key="option.value">
            <a-checkbox :option="option" v-model="state.sources" @change="onChange" />
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, SetupContext } from 'vue';
import ACheckbox from '@/components/01-atoms/data-entry/ACheckbox.vue';
import { ACheckboxGroupProps } from '@/types/components/01-atoms/data-entry/ACheckboxGroup';
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
    setup(props: ACheckboxGroupProps, { emit }: SetupContext) {
        const state = reactive({
            sources: [...props.modelValue]
        });

        const method = {
            onChange: () => {
                emit('update:modelValue', state.sources);
                emit('change', state.sources);
            }
        };

        return {
            state,
            ...method
        };
    }
});
</script>

<style lang="scss" scoped>
.a-checkbox-group {
    display: flex;
    flex-wrap: wrap;
}
</style>
