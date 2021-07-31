<template>
    <fieldset class="m-radio-group">
        <template v-for="option in options" :key="option.value">
            <a-radio :option="option" v-model="state.source" @change="onChange" />
        </template>
    </fieldset>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, SetupContext } from 'vue';
import ARadio from '@/components/01-atoms/data-entry/ARadio.vue';
import {
    MRadioGroupProps,
    MRadioGroupState
} from '@/types/components/02-molecules/data-entry/MRadioGroup';
import { ARadioOption } from '@/types/components/01-atoms/data-entry/ARadio';

export default defineComponent({
    components: {
        ARadio
    },
    props: {
        options: {
            type: Array as PropType<ARadioOption[]>,
            default: () => []
        },
        modelValue: {
            type: String,
            default: () => ''
        }
    },
    setup(props: MRadioGroupProps, { emit }: SetupContext) {
        const state = reactive<MRadioGroupState>({
            source: props.modelValue
        });

        const method = {
            onChange: () => {
                emit('update:modelValue', state.source);
                emit('change', state.source);
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
.m-radio-group {
    display: flex;
    flex-wrap: wrap;
    border: none;
}
</style>
