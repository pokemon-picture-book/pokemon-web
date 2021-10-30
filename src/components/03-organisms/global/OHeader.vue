<template>
    <header class="o-header">
        <div class="o-header__title">
            <i class="ib ib-whh-pokemon ib-3x"></i>
            <h2 class="o-header__title-text">ポケモン図鑑</h2>
        </div>
        <nav class="o-header__navigation gnav">
            <ul class="gnav__menu">
                <!-- TODO: グローバル対応実施のタイミングで表示する -->
                <li class="gnav__menu-item" style="display: none">
                    <a-select :items="languageItems" @select="updateLanguageItem" />
                </li>
                <li class="gnav__menu-item">
                    <o-pokemon-filter-modal />
                </li>
            </ul>
        </nav>
    </header>
    <div class="dummy-contains"></div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue';
import ASelect from '@/components/01-atoms/data-entry/ASelect.vue';
import OPokemonFilterModal from '@/components/03-organisms/pokemon/OPokemonFilterModal.vue';
import { LanguageStateKey, languageState, LanguageStateType } from '@/stores/master/language';
import { ASelectItem } from '@/types/components/01-atoms/data-entry/ASelect';

export default defineComponent({
    components: {
        ASelect,
        OPokemonFilterModal
    },
    setup() {
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
@import '@/assets/style/index.scss';

.o-header {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    position: fixed;
    width: 98%;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);
    z-index: 100;

    @media only screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }

    &__title {
        display: flex;
        align-items: center;

        &-text {
            margin: 0 16px;
        }
    }

    &__navigation {
        & .gnav {
            &__menu {
                display: flex;
                align-items: flex-end;
                padding: 0;

                &-item {
                    margin: 0 8px;
                    list-style: none;
                }
            }
        }
    }
}

.dummy-contains {
    height: 100px;

    @media only screen and (max-width: 750px) {
        height: 160px;
    }
}
</style>
