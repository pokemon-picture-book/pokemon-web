<template>
    <div class="a-select" :class="{ opened: state.isOpened }">
        <span class="a-select__trigger" :class="classes" @click="onClickTrigger">
            {{ source.label }}
        </span>
        <div class="a-select__list">
            <span
                v-for="item in items.length ? items : [notItemValue]"
                :key="item.id"
                class="a-select__list--item"
                :class="{ selection: source.value === item.value }"
                @click="onClickItem(item)"
            >
                {{ item.label }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext, toRefs, computed, reactive, watch } from 'vue';
import { ASelectItem, ASelectProps } from '@/types/01-atoms/data-entry/ASelect';
import { Color, Size } from '@/types/common/index.d';

const notItemValue: ASelectItem = { id: 0, label: 'Not Item', value: 'not-item' };

/**
 * セレクトボックス.
 */
export default defineComponent({
    props: {
        items: {
            type: Array as PropType<ASelectItem[]>,
            require: true,
            default: () => []
        },
        source: {
            type: Object as PropType<ASelectItem>
        },
        color: {
            type: String as PropType<Color>,
            default: 'default'
        },
        size: {
            type: String as PropType<Size>,
            default: 'default'
        }
    },
    setup(props: ASelectProps, { emit }: SetupContext) {
        const propToRef = toRefs<ASelectProps>(props);

        const state = reactive({
            isOpened: false
        });

        const computedMethod = {
            classes: computed(() => [
                `color--${propToRef.color.value}`,
                `size--${propToRef.size.value}`
            ]),
            source: computed(() => {
                if (propToRef.source && propToRef.source.value) {
                    return propToRef.source.value;
                }
                if (propToRef.items.value.length) {
                    return propToRef.items.value[0];
                }
                return notItemValue;
            })
        };

        const method = {
            onClickTrigger: (e: Event) => {
                document.body.onclick = () => {
                    state.isOpened = false;
                };
                state.isOpened = !state.isOpened;
                e.stopPropagation();
            },
            onClickItem: (item: ASelectItem) => {
                emit('update:source', item);
                state.isOpened = false;
            }
        };

        return {
            notItemValue,
            state,
            ...computedMethod,
            ...method
        };
    },
    onUnmounted() {
        document.body.onclick = () => {};
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/color.scss';

.a-select {
    position: relative;
    display: inline-block;

    .color {
        @mixin select-color(
            $color: $p-shadow-color,
            $background-color: $p-white-color,
            $after-color: $p-black-color
        ) {
            color: $color;
            background-color: $background-color;

            &:after {
                border-bottom: 1px solid $after-color;
                border-right: 1px solid $after-color;
            }
        }

        &--default {
            @include select-color;
        }
        &--primary {
            @include select-color($p-white-color, $p-primary-color, $p-white-color);
        }
    }

    .size {
        &--x-small {
            width: 120px;
        }
        &--small {
            width: 136px;
        }
        &--default {
            width: 160px;
        }
        &--large {
            width: 184px;
        }
        &--x-large {
            width: 200px;
        }
    }

    &__trigger {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 16px;
        font-size: 16px;
        font-weight: 300;
        height: 32px;
        border-radius: 4px;
        cursor: pointer;
        border: solid 1px;
        outline: none;

        &:after {
            position: absolute;
            display: block;
            content: '';
            width: 8px;
            height: 8px;
            top: 50%;
            right: 25px;
            margin-top: -2px;
            border-bottom: 1px solid $p-white-color;
            border-right: 1px solid $p-white-color;
            transform: rotate(45deg) translateY(-50%);
            transition: all 0.4s ease-in-out;
            transform-origin: 50% 0;
        }
    }

    &__list {
        position: absolute;
        display: block;
        top: 100%;
        left: 0;
        right: 0;
        min-width: 100%;
        margin: 8px 0;
        border: 1px solid $p-shadow-color;
        border-radius: 4px;
        box-sizing: border-box;
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.07);
        background: $p-white-color;
        transition: all 0.4s ease-in-out;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateY(-15px);

        &:before {
            position: absolute;
            display: block;
            content: '';
            bottom: 100%;
            right: 25px;
            width: 8px;
            height: 8px;
            margin-bottom: -3px;
            border-top: 1px solid $p-shadow-color;
            border-left: 1px solid $p-shadow-color;
            background: $p-white-color;
            transform: rotate(45deg);
            transition: all 0.4s ease-in-out;
        }

        &--item {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 16px;
            border-bottom: 1px solid $p-shadow-color;
            font-weight: 600;
            color: $p-shadow-color;
            height: 32px;
            cursor: pointer;
            transition: all 0.4s ease-in-out;

            &:first-of-type {
                border-radius: 4px 4px 0 0;
            }

            &:last-of-type {
                border-bottom: 0;
                border-radius: 0 0 4px 4px;
            }
        }

        &--item:hover,
        .selection {
            background: $p-select-hover-color;
            color: $p-shadow-color;
        }
    }

    .opened &__trigger:after {
        margin-top: 3px;
        transform: rotate(-135deg) translateY(-50%);
    }

    .opened &__list {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        transform: translateY(0);
    }
}
</style>
