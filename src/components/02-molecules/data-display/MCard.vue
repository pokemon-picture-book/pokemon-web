<template>
    <section class="m-card">
        <figure
            v-if="img"
            class="m-card__img-wrapper"
            :class="{ 'm-card__img-full': img && img.isFull }"
        >
            <img class="m-card__img" :src="img.src" :alt="img.alt || 'card image'" />
        </figure>

        <div class="m-card__body" :class="{ 'm-card__body-with-img': img }">
            <slot></slot>
        </div>

        <div class="m-card__footer">
            <slot name="footer"></slot>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardImg } from '@/types/components/02-molecules/data-display/MCard';

/**
 * ポケモンタイプ.
 */
export default defineComponent({
    props: {
        img: {
            type: Object as PropType<CardImg | null>,
            default: () => null
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/color.scss';

.m-card {
    background: $p-white-color;
    border-radius: 5px;
    box-shadow: 2px 2px 5px $p-shadow-color;
    cursor: pointer;
    transition-duration: 0.5s;

    &:hover {
        box-shadow: 8px 8px 5px $p-shadow-color;
        transform: translateY(-5px);
        transition-duration: 0.5s;
    }

    &__img {
        position: absolute;
        top: 50%;
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: translateY(-50%);

        &-wrapper {
            position: relative;
            padding-top: 65%;
            margin: 16px 8px;
        }

        &-full {
            margin: 0;
        }

        &-border {
            border-bottom: 1px solid $p-light-gray-line-color;
            margin: 0;
        }
    }

    &__body {
        margin: 0;
        padding: 16px;

        &-with-img {
            border-top: 1px solid $p-light-gray-line-color;
        }
    }

    &__footer {
        display: flex;
        justify-content: space-around;
        border-top: 1px solid $p-light-gray-line-color;
        background: $p-light-gray-color;
        text-align: center;

        & ::v-slotted(*) {
            cursor: pointer;
            border-right: 1px solid $p-light-gray-line-color;
            padding: 16px 8px;
            width: 100%;

            &:first-child {
                padding-left: 16px;
            }

            &:last-child {
                padding-right: 16px;
                border-right: none;
            }
        }
    }
}
</style>
