<template>
    <button
        :type="type"
        class="a-button"
        :class="[`a-button--theme-${theme}`, { disabled }]"
        @click="onClick"
    >
        <div class="a-button__contents">
            <!-- left side icon -->
            <search-eye-line-svg v-if="icon === 'search'" class="a-button__icon" />
            <form-previous-svg v-if="icon === 'prev'" class="a-button__icon" />
            <round-add-svg v-if="icon === 'add'" class="a-button__icon" />

            <span v-if="hasSlot('default')" class="a-button__text">
                <slot></slot>
            </span>

            <!-- right side icon -->
            <form-next-svg v-if="icon === 'next'" class="a-button__icon" />
        </div>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ButtonType, ButtonTheme, ButtonIcon } from '@/components/01-atoms/general/a-button';
import SearchEyeLineSvg from '@/assets/img/components/search-eye-line.svg?component';
import FormNextSvg from '@/assets/img/components/form-next.svg?component';
import FormPreviousSvg from '@/assets/img/components/form-previous.svg?component';
import RoundAddSvg from '@/assets/img/components/round-add.svg?component';

export default defineComponent({
    components: {
        SearchEyeLineSvg,
        FormNextSvg,
        FormPreviousSvg,
        RoundAddSvg
    },
    props: {
        type: {
            type: String as PropType<ButtonType>,
            default: () => 'button' as ButtonType
        },
        theme: {
            type: String as PropType<ButtonTheme>,
            default: () => 'default' as ButtonTheme
        },
        icon: {
            type: String as PropType<ButtonIcon>,
            default: () => 'none' as ButtonIcon
        },
        disabled: {
            type: Boolean,
            default: () => false
        }
    },
    // 親コンポーネントで２重で呼ばれるのを防ぐ
    emits: ['click'],
    setup(_, { emit, slots }) {
        const methods = {
            onClick() {
                emit('click');
            },
            hasSlot(slotName: string) {
                return slotName in slots;
            }
        };
        return {
            ...methods
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/components/index.scss';

.a-button {
    @include font-size(16, 20.8);

    position: relative;
    display: inline-block;
    width: 160px;
    max-width: 100%;
    padding: 8px;
    text-align: center;
    text-decoration: none;
    border-style: hidden;
    border-radius: 8px;
    box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
    font-weight: bold;
    cursor: pointer;
    transition: 0.25s;

    &--theme {
        /** type default */
        &-default {
            color: $p-black-color;
            background: $p-light-gray-color;
            border-color: $p-light-gray-color;
            border-bottom: solid 2px $p-light-gray-line-color;

            &:active {
                border-bottom: solid 2px $p-light-gray-color;
                box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
            }

            &:hover {
                background: $p-light-gray-hover-color;
            }
        }

        /** type primary */
        &-primary {
            color: $p-white-color;
            background: $p-primary-color;
            border-color: $p-primary-color;
            border-bottom: solid 2px $p-primary-deep-color;

            &:active {
                border-bottom: solid 2px $p-primary-color;
                box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
            }

            &:hover {
                background: $p-primary-hover-color;
            }
        }

        /** type pager */
        &-pager {
            color: $p-primary-color;
            background: $p-white-color;
            border-color: $p-white-color;
            border-bottom: solid 2px $p-light-gray-color;

            &:active {
                border-bottom: solid 2px $p-signpost-hover-color;
                box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
            }

            &:hover {
                background: $p-signpost-hover-color;
                border-bottom: solid 2px $p-signpost-shadow-color;
            }
        }
    }

    &.disabled {
        cursor: default;
        pointer-events: none;
        color: $p-white-color;
        opacity: 0.3;
        background: $p-disabled;
        border-bottom: solid 2px $p-disabled;
    }

    &__contents {
        display: flex;
        justify-content: center;
    }

    &__icon {
        width: 24px;
    }

    &__text {
        padding: 0 8px;
    }
}
</style>
