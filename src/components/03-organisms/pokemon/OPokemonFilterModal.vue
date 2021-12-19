<template>
    <div class="o-pokemon-filter-modal">
        <i class="ib ib-ri-search-eye-line ib-2x" @click="modalOpen"></i>
        <m-modal :is-show="state.isShowModal" @close="modalClose" class="modal">
            <template v-slot:header>
                <div class="header modal__header">
                    <div class="header__title">
                        <i class="ib ib-ri-search-eye-line ib-2x"></i>
                        <span class="header__title-text">条件を入力</span>
                    </div>
                </div>
            </template>
            <template v-slot:body>
                <div class="body modal__body">
                    <div class="body__contains">
                        <div class="body__title">
                            <i class="ib ib-gg-pokemon ib-3x"></i>
                            <span class="body__title-text">ゲーム</span>
                        </div>
                        <m-radio-group
                            v-model="state.selectedGameVersionGroup"
                            :options="gameVersionGroups"
                            @change="onGameChange"
                        ></m-radio-group>
                    </div>
                    <div class="body__contains">
                        <div class="body__title">
                            <i class="ib ib-ic-twotone-catching-pokemon ib-3x"></i>
                            <span class="body__title-text">地域</span>
                            <div class="body__description">
                                <span>※</span>
                                <span
                                    >何も選択されていない場合は【Kanto/関東】地方が選択されます</span
                                >
                            </div>
                        </div>
                        <m-checkbox-group
                            v-model="state.selectedRegions"
                            :options="regions"
                        ></m-checkbox-group>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="footer modal__footer">
                    <a-button class="footer__button" @click="modalClose">キャンセル</a-button>
                    <a-button class="footer__button" color="primary" @click="onClick">
                        検索する
                    </a-button>
                </div>
            </template>
        </m-modal>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, reactive } from 'vue';
import { useRouter } from 'vue-router';
import {
    GameVersionGroupStateKey,
    gameVersionGroupState,
    GameVersionGroupStateType
} from '@/stores/pokemon/game-version-group';
import { RegionStateKey, regionState, RegionStateType } from '@/stores/pokemon/region';
import MModal from '@/components/02-molecules/toggle/MModal.vue';
import MCheckboxGroup from '@/components/02-molecules/data-entry/MCheckboxGroup.vue';
import MRadioGroup from '@/components/02-molecules/data-entry/MRadioGroup.vue';
import AButton from '@/components/01-atoms/general/AButton.vue';
import { ACheckboxOption } from '@/types/components/01-atoms/data-entry/ACheckbox';
import { ARadioOption } from '@/types/components/01-atoms/data-entry/ARadio';
import {
    OPokemonFilterModalState,
    SelectedParam
} from '@/types/components/03-organisms/pokemon/OPokemonFilterModal';

export default defineComponent({
    components: {
        MModal,
        MRadioGroup,
        MCheckboxGroup,
        AButton
    },
    props: {
        selectedParam: {
            type: Object as PropType<SelectedParam>,
            default: () => ({ regions: [], game: '' })
        }
    },
    setup(props) {
        const router = useRouter();

        const state = reactive<OPokemonFilterModalState>({
            isShowModal: false,
            selectedGameVersionGroup: '',
            selectedRegions: []
        });

        const gameVersionGroupStore = gameVersionGroupState();
        provide<GameVersionGroupStateType>(GameVersionGroupStateKey, gameVersionGroupStore);
        gameVersionGroupStore.action.fetchAll('ja-Hrkt', true).then(() => {
            // set first value
            if (props.selectedParam.game) {
                state.selectedGameVersionGroup = props.selectedParam.game;
                return;
            }
            state.selectedGameVersionGroup =
                gameVersionGroupStore.getter.gameVersionGroups.value[0].alias;
        });

        const regionStore = regionState();
        provide<RegionStateType>(RegionStateKey, regionStore);
        regionStore.action.fetchAll('ja-Hrkt').then(() => {
            // set first value
            if (props.selectedParam.regions.length) {
                state.selectedRegions = props.selectedParam.regions;
                return;
            }
            state.selectedRegions = [regionStore.getter.regions.value[0].name];
        });

        if (!(gameVersionGroupStore && regionStore)) {
            throw new Error('inject failed.');
        }

        const computedMethods = {
            gameVersionGroups: computed<ARadioOption[]>(() => {
                return gameVersionGroupStore.getter.gameVersionGroups.value.map(
                    (gameVersionGroup) => {
                        const regionNames = gameVersionGroup.relatedRegions.map(
                            (relatedRegion) => relatedRegion.name
                        );
                        return {
                            index: gameVersionGroup.id,
                            label: gameVersionGroup.name,
                            value: gameVersionGroup.alias,
                            disabled: state.selectedRegions.length
                                ? !regionNames.some((regionName) =>
                                      state.selectedRegions.includes(regionName)
                                  )
                                : false
                        };
                    }
                );
            }),
            regions: computed<ACheckboxOption[]>(() => {
                return regionStore.getter.regions.value.map((region) => {
                    const gameVersionGroupNames = region.relatedGameVersionGroups.map(
                        (relatedGameVersionGroup) => relatedGameVersionGroup.alias
                    );
                    return {
                        label: region.displayName,
                        value: region.name,
                        disabled: state.selectedGameVersionGroup.length
                            ? !gameVersionGroupNames.some((gameVersionGroupName) =>
                                  state.selectedGameVersionGroup.includes(gameVersionGroupName)
                              )
                            : false
                    };
                });
            })
        };

        const methods = {
            modalOpen() {
                state.isShowModal = true;
            },
            modalClose() {
                state.isShowModal = false;
            },
            onGameChange() {
                // 選択されたゲームに関連する地域内のデータにフィルターする
                const {
                    relatedRegions
                } = gameVersionGroupStore.getter.gameVersionGroups.value.find(
                    (gameVersionGroup) => {
                        return gameVersionGroup.alias === state.selectedGameVersionGroup;
                    }
                )!;
                const relatedRegionNames = relatedRegions.map(
                    (relatedRegion) => relatedRegion.name
                );
                state.selectedRegions = state.selectedRegions.filter((selectedRegion) =>
                    relatedRegionNames.includes(selectedRegion)
                );
            },
            /** 選択された条件を query parameter にセットし、検索を実行して、モーダルを閉じる */
            onClick() {
                if (!state.selectedRegions.length) {
                    state.selectedRegions = [regionStore.getter.regions.value[0].name];
                }

                router.push({
                    path: '/home',
                    query: {
                        game: state.selectedGameVersionGroup,
                        regions: state.selectedRegions
                    }
                });

                state.isShowModal = false;
            }
        };

        return {
            state,
            ...computedMethods,
            ...methods
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

@mixin title($font-size: 16) {
    display: flex;
    align-items: center;

    &-text {
        @include font-size($font-size);

        padding: 0 8px;
    }
}

.o-pokemon-filter-modal {
    & > i {
        cursor: pointer;
    }

    .modal {
        .header {
            &__title {
                @include title(32);
            }
        }

        .body {
            &__title {
                @include title(24);

                line-height: 1;

                &-text {
                    font-weight: bold;
                    display: block;
                    position: relative;
                    white-space: nowrap;
                }
            }

            &__description {
                display: flex;
                color: $p-gray-color;
                padding-left: 8px;
            }

            &__contains {
                padding: 8px 0;
            }
        }

        .footer {
            width: 100%;
            display: flex;
            justify-content: center;

            &__button {
                margin: 0 16px;
            }
        }
    }
}
</style>
