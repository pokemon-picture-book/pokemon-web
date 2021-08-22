<template>
    <fieldset class="m-radio-group">
        <template v-for="option in options" :key="option.value">
            <a-radio :option="option" v-model="model" @change="onChange" />
        </template>
    </fieldset>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, SetupContext } from 'vue';
import ARadio from '@/components/01-atoms/data-entry/ARadio.vue';
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
    setup(props, { emit }: SetupContext) {
        const method = {
            onChange: (option: ARadioOption) => {
                emit('change', option, props.options);
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
.m-radio-group {
    display: flex;
    flex-wrap: wrap;
    border: none;
}
</style>
