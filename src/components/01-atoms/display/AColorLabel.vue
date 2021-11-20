<template>
    <div class="a-color-label">
        <span
            class="a-color-label__text"
            v-for="(item, index) in items"
            :key="index"
            :class="[
                { 'a-color-label__text--not-found': !item.label },
                `a-color-label__text-color--${item.code}`
            ]"
        >
            {{ item.label }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { AColorLabelItem } from '@/types/components/01-atoms/display/AColorLabel';

/**
 * ポケモンタイプ.
 */
export default defineComponent({
    props: {
        items: {
            type: Array as PropType<AColorLabelItem[]>,
            require: true,
            default: () => []
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/color.scss';

.a-color-label {
    display: flex;
    flex-wrap: wrap;
    margin: 8px;

    &__text {
        min-height: 16px;
        min-width: 16px;
        border-radius: 16px;
        margin-right: 8px;
        padding: 8px;
        color: $p-white-color;
        font-size: 8px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:last-child {
            margin-right: 0;
        }

        &--not-found {
            border-radius: 50%;
            padding: 4px;
        }

        &-color {
            &--normal {
                background-color: $p-type-normal;
            }

            &--fighting {
                background-color: $p-type-fighting;
            }

            &--flying {
                background-color: $p-type-flying;
            }

            &--poison {
                background-color: $p-type-poison;
            }

            &--ground {
                background-color: $p-type-ground;
            }

            &--rock {
                background-color: $p-type-rock;
            }

            &--bug {
                background-color: $p-type-bug;
            }

            &--ghost {
                background-color: $p-type-ghost;
            }

            &--steel {
                background-color: $p-type-steel;
            }

            &--fire {
                background-color: $p-type-fire;
            }

            &--water {
                background-color: $p-type-water;
            }

            &--grass {
                background-color: $p-type-grass;
            }

            &--electric {
                background-color: $p-type-electric;
            }

            &--psychic {
                background-color: $p-type-psychic;
            }

            &--ice {
                background-color: $p-type-ice;
            }

            &--dragon {
                background-color: $p-type-dragon;
            }

            &--dark {
                background-color: $p-type-dark;
            }

            &--fairy {
                background-color: $p-type-fairy;
            }
        }
    }
}
</style>
