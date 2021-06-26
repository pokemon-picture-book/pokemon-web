<template>
    <div class="header">
        <div class="header__title">
            <i class="ib ib-whh-pokemon ib-3x"></i>
            <h2 class="header__title--text">ポケモン図鑑</h2>
        </div>
        <div class="header__operation">
            <a-select :items="languageItems" @select="updatelanguageItem" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue';
import ASelect from '@/components/01-atoms/data-entry/ASelect.vue';
import { LanguageStateKey, languageState, LanguageStateType } from '@/stores/master/language';
import { ASelectItem } from '@/types/01-atoms/data-entry/ASelect';

export default defineComponent({
    components: {
        ASelect
    },
    setup() {
        const store = languageState();
        provide<LanguageStateType>(LanguageStateKey, store);

        store.action.fetchAll();

        const computedMethod = {
            languageItems: computed<ASelectItem[]>(() => {
                return store.getter.languages.value.map((language) => ({
                    id: language.id,
                    label: language.labelName,
                    value: language.name
                }));
            })
        };

        const method = {
            updatelanguageItem: (newItem: ASelectItem) => {
                console.log(newItem);
            }
        }

        return {
            store,
            ...computedMethod,
            ...method
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $p-black-color;
    padding: 16px;

    @media only screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }

    &__title {
        display: flex;
        align-items: center;

        &--text {
            margin: 0 16px;
        }
    }

    &__operation {
        margin: auto 0;
    }
}
</style>
