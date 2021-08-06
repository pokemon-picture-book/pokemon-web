<template>
    <div class="o-pokemon-filter-modal">
        <i class="ib ib-ri-search-eye-line ib-2x" @click="modalOpen"></i>
        <m-modal :is-show="state.isShowModal" @close="modalClose">
            <template v-slot:header>
                <div class="modal__title">
                    <i class="ib ib-ri-search-eye-line ib-2x" @click="modalOpen"></i>
                    <span class="modal__title--text">条件を入力</span>
                </div>
            </template>
            <template v-slot:body>
                <div class="modal-body">
                    <div class="modal-body__game contains">
                        <div class="contains__title">
                            <i class="ib ib-gg-pokemon ib-3x"></i>
                            <span class="contains__title--text">ゲーム</span>
                        </div>
                        <m-radio-group
                            v-model="state.selectedGameVersionGroup"
                            :options="gameVersionGroups"
                            @change="onGameChange"
                        ></m-radio-group>
                    </div>
                    <div class="modal-body__region contains">
                        <div class="contains__title">
                            <i class="ib ib-ic-twotone-catching-pokemon ib-3x"></i>
                            <span class="contains__title--text">地域</span>
                            <span class="contains__title--description">
                                ※何も選択されていない場合は【Kanto/関東】地方が選択されます
                            </span>
                        </div>
                        <m-checkbox-group
                            v-model="state.selectedRegions"
                            :options="regions"
                        ></m-checkbox-group>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="modal-footer">
                    <a-button class="modal-footer__button" @click="modalClose">キャンセル</a-button>
                    <a-button class="modal-footer__button" color="primary" @click="onClick"
                        >検索する</a-button
                    >
                </div>
            </template>
        </m-modal>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive } from 'vue';
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

type State = {
    isShowModal: boolean;
    selectedGameVersionGroup: string;
    selectedRegions: string[];
};

export default defineComponent({
    components: {
        MModal,
        MRadioGroup,
        MCheckboxGroup,
        AButton
    },
    setup() {
        const state = reactive<State>({
            isShowModal: false,
            selectedGameVersionGroup: '',
            selectedRegions: []
        });

        const gameVersionGroupStore = gameVersionGroupState();
        provide<GameVersionGroupStateType>(GameVersionGroupStateKey, gameVersionGroupStore);
        gameVersionGroupStore.action.fetchAll('ja', true).then(() => {
            // set first value
            state.selectedGameVersionGroup =
                gameVersionGroupStore.getter.gameVersionGroups.value[0].alias;
        });

        const regionStore = regionState();
        provide<RegionStateType>(RegionStateKey, regionStore);
        regionStore.action.fetchAll('ja').then(() => {
            // set first value
            state.selectedRegions = [regionStore.getter.regions.value[0].name];
        });

        if (!(gameVersionGroupStore && regionStore)) {
            throw new Error('inject failed.');
        }

        const computedMethod = {
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

        const method = {
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
            /** 選択された条件をコミットし、検索を実行して、モーダルを閉じる */
            onClick() {
                if (!state.selectedRegions.length) {
                    state.selectedRegions = [regionStore.getter.regions.value[0].name];
                }

                gameVersionGroupStore.action.saveSelectedAlias(state.selectedGameVersionGroup);
                regionStore.action.saveSelectedNames(state.selectedRegions);

                state.isShowModal = false;
            }
        };

        return {
            state,
            ...computedMethod,
            ...method
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

@mixin title($font-size: 16px) {
    display: flex;
    align-items: center;

    &--text {
        font-size: $font-size;
        padding: 0 8px;
    }
}

.o-pokemon-filter-modal {
    & > i {
        cursor: pointer;
    }

    .modal {
        &__title {
            @include title(24px);
        }

        &-body {
            .contains {
                &__title {
                    @include title();

                    line-height: 1;

                    &--text {
                        font-weight: bold;
                        display: block;
                        position: relative;
                        white-space: nowrap;
                    }

                    &--description {
                        color: $p-gray-color;
                        padding-left: 8px;
                    }
                }
            }
        }

        &-footer {
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
