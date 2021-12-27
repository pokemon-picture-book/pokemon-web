<template>
    <fieldset class="m-radio-group">
        <template v-for="option in options" :key="option.value">
            <a-radio :option="option" v-model="model" @change="onChange" />
        </template>
    </fieldset>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, SetupContext } from 'vue';
import ARadio from '@/components/01-atoms/data-entry/a-radio/Index.vue';
import { ARadioOption } from '@/components/01-atoms/data-entry/a-radio';

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
        const methods = {
            onChange: (option: ARadioOption) => {
                emit('change', option, props.options);
            }
        };

        const computedMethods = {
            model: computed({
                get: () => props.modelValue,
                set: (newModelValue) => emit('update:modelValue', newModelValue)
            })
        };

        return {
            ...methods,
            ...computedMethods
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
