<template>
    <transition name="m-modal">
        <div v-if="isShow" class="m-modal-mask">
            <div class="m-modal-wrapper">
                <div class="m-modal-container">
                    <div class="m-modal-container__header">
                        <slot name="header"> default header </slot>

                        <div
                            class="m-modal-container__header--close-button"
                            @click="$emit('close')"
                        >
                            <i class="ib fa-close"></i>
                        </div>
                    </div>

                    <div class="m-modal-container__body">
                        <slot name="body"></slot>
                    </div>

                    <div class="m-modal-container__footer">
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
    &-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    &-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    &-container {
        width: 50vw;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;

        &__header,
        &__body,
        &__footer {
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
            max-height: calc(100vh - 15em);
            overflow: auto;
        }

        &__footer {
            border-top: 1px solid;
        }
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
