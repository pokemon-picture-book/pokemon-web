<template>
    <section class="m-card">
        <div class="m-card__img">
            <slot name="img"></slot>
        </div>
        <div class="m-card__content">
            <slot></slot>
        </div>
        <div class="m-card__footer">
            <slot name="footer"></slot>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/**
 * ポケモンタイプ.
 */
export default defineComponent({});
</script>

<style lang="scss" scoped>
@import '@/assets/style/color.scss';

.m-card {
    margin: 30px auto;
    background: $p-white-color;
    border-radius: 5px;
    box-shadow: 0 2px 5px $p-shadow-color;

    &__img {
        border-bottom: 1px solid $p-light-gray-line-color;

        & ::v-slotted(img) {
            border-radius: 5px 5px 0 0;
            max-width: 100%;
            height: auto;
        }
    }

    &__content {
        margin: 0;
        padding: 16px;

        &--title {
            font-weight: bold;
            margin-bottom: 16px;
            color: $p-black-color;
        }

        &--description {
            margin-top: 16px;
            color: $p-gray-color;
            line-height: 1.5;
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
