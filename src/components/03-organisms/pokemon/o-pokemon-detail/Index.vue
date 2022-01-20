<template>
    <div class="o-pokemon-detail">
        <div class="o-pokemon-detail__aside aside">
            <a-button class="aside__button" type="pager" icon="prev" />
        </div>

        <section class="o-pokemon-detail__contents contents">
            <div class="contents__container img">
                <figure class="main-img-wrapper img-wrapper">
                    <img class="main-img" :src="data.mainImage.src" :alt="data.mainImage.alt" />
                </figure>
                <figure class="sub-img-wrapper img-wrapper">
                    <img class="sub-img" :src="data.subImage.src" :alt="data.subImage.alt" />
                </figure>
            </div>
            <div class="contents__container info">
                <ul>
                    <li class="info__item">
                        <div class="info__detail">
                            <figure class="info__icon-wrapper">
                                <img
                                    class="info__icon"
                                    :src="data.iconImage.src"
                                    :alt="data.iconImage.alt"
                                />
                            </figure>
                            <span>No.{{ String(data.no).padStart(3, '0') }}</span>
                            <h1>{{ data.name }}</h1>
                        </div>
                    </li>
                    <li class="info__item">
                        <span>{{ data.genus }}</span>
                    </li>
                    <li class="info__item">
                        <a-color-label :items="data.types" />
                    </li>
                    <li class="info__item">
                        <span>たかさ:{{ data.height / 10 }}m</span>
                    </li>
                    <li class="info__item">
                        <span>おもさ:{{ data.weight / 10 }}kg</span>
                    </li>
                    <li class="info__item">
                        <span>{{ data.flavorText }}</span>
                    </li>
                </ul>
            </div>
        </section>

        <div class="o-pokemon-detail__aside aside">
            <a-button class="aside__button" type="pager" icon="next" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AColorLabel from '@/components/01-atoms/display/a-color-label/Index.vue';
import AButton from '@/components/01-atoms/general/a-button/Index.vue';
import { OPokemonDetailData } from '@/components/03-organisms/pokemon/o-pokemon-detail';

export default defineComponent({
    components: {
        AColorLabel,
        AButton
    },
    props: {
        data: {
            type: Object as PropType<OPokemonDetailData>
        }
    },
    setup() {}
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/components/index.scss';

.o-pokemon-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $p-light-gray-color;

    .aside {
        margin: 16px;

        &__button {
            width: auto;
            height: 96px;
            padding: 0;
        }
    }

    .contents {
        width: 100%;
        display: flex;
        align-items: center;

        &__container {
            width: 50%;
            margin: 16px 8px;
        }

        .img {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;

            &-wrapper {
                margin-right: 16px;
            }

            .main-img {
                width: 100%;

                &-wrapper {
                    width: 45%;
                }
            }

            .sub-img {
                padding: 24px;
                width: 80px;

                &-wrapper {
                    border: 1px solid $p-black-color;
                    border-radius: 50%;
                    background-color: $p-white-color;
                }
            }
        }

        .info {
            &__item {
                padding: 8px 0;
                line-height: 1.5;
            }

            &__detail {
                display: flex;
                align-items: flex-end;

                & > * {
                    margin-left: 16px;

                    &:first-child {
                        margin-left: 0;
                    }
                }
            }
        }
    }
}
</style>
