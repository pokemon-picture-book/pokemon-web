<template>
    <transition name="m-modal">
        <div v-if="isShow" class="m-modal">
            <div class="m-modal__container-wrapper">
                <div class="m-modal__container">
                    <div class="model-contents m-modal__header">
                        <slot name="header"> default header </slot>

                        <div class="header__button" @click="$emit('close')">
                            <i class="ib fa-close"></i>
                        </div>
                    </div>

                    <div class="model-contents m-modal__body">
                        <slot name="body"></slot>
                    </div>

                    <div class="model-contents m-modal__footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        isShow: {
            type: Boolean,
            default: () => false
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

.m-modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;

    &__container {
        width: 80vw;
        max-width: 100%;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;

        @media only screen and (max-width: $mobile-border-width) {
            width: 95vw;
        }

        &-wrapper {
            margin: 32px 0;
        }
    }

    .model-contents {
        padding: 16px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid;
        font-weight: bold;

        &--close-button {
            cursor: pointer;
        }
    }

    &__body {
        max-height: calc(100vh - 20em);
        overflow: auto;
    }

    &__footer {
        border-top: 1px solid;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */
    &-enter-active,
    &-leave-active {
        transition: opacity 0.3s ease;
    }

    &-enter,
    &-leave-to {
        opacity: 0;
    }
}
</style>
