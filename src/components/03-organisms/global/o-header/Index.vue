<template>
    <header class="o-header">
        <div class="o-header__item o-header__title">
            <i class="ib ib-whh-pokemon ib-3x"></i>
            <h2 class="o-header__title-text">ポケモン図鑑</h2>
        </div>
        <nav class="o-header__item o-header__navigation gnav">
            <ul class="gnav__menu">
                <!-- TODO: グローバル対応実施のタイミングで表示する -->
                <li class="gnav__menu-item" style="display: none">
                    <a-select :items="languageItems" @select="updateLanguageItem" />
                </li>
                <li class="gnav__menu-item">
                    <o-pokemon-filter-modal :selected-param="selectedFilterParam" />
                </li>
            </ul>
        </nav>
    </header>
    <div class="dummy-contains"></div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide } from 'vue';
import { LocationQuery, LocationQueryValue } from 'vue-router';
import ASelect from '@/components/01-atoms/data-entry/a-select/Index.vue';
import OPokemonFilterModal from '@/components/03-organisms/pokemon/o-pokemon-filter-modal/Index.vue';
import { LanguageStateKey, languageState, LanguageStateType } from '@/stores/http/languages';
import { ASelectItem } from '@/components/01-atoms/data-entry/a-select';
import { SelectedParam } from '@/components/03-organisms/pokemon/o-pokemon-filter-modal';

export default defineComponent({
    components: {
        ASelect,
        OPokemonFilterModal
    },
    props: {
        queryParam: {
            type: Object as PropType<LocationQuery>
        }
    },
    setup(props) {
        const store = languageState();
        provide<LanguageStateType>(LanguageStateKey, store);

        store.action.fetchAll();

        const computedMethods = {
            languageItems: computed<ASelectItem[]>(() => {
                return store.getter.languages.value.map((language) => ({
                    id: language.id,
                    label: language.labelName,
                    value: language.name
                }));
            }),
            selectedFilterParam: computed<SelectedParam>(() => {
                const param = {
                    regions: [],
                    game: ''
                };

                if (!(props.queryParam && Object.keys(props.queryParam).length)) {
                    return param;
                }

                const queryGame = props.queryParam.game as LocationQueryValue;
                if (queryGame) {
                    Object.assign(param, { game: queryGame });
                }

                const queryRegions = props.queryParam.regions;
                if (Array.isArray(queryRegions)) {
                    Object.assign(param, { regions: queryRegions as string[] });
                    return param;
                }
                if (queryRegions) {
                    Object.assign(param, { regions: [queryRegions] });
                    return param;
                }
                return param;
            })
        };

        const methods = {
            updateLanguageItem: (newItem: ASelectItem) => {
                console.log(newItem);
            }
        };

        return {
            store,
            ...computedMethods,
            ...methods
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/components/index.scss';
@import './style.scss';
</style>
