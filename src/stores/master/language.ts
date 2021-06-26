import { computed, InjectionKey, reactive } from 'vue'
import { State, Getter, Action } from '@/types/stores/master/language';
import repository from '@/plugins/http/api/languages'

export const languageState = () => {
    const state: State = reactive({
        languages: []
    })

    const getter: Getter = {
        languages: computed(() => state.languages)
    }

    const action: Action = {
        fetchAll: async () => {
            const { data } = await repository.findAll();
            state.languages = data;
        }
    }

    return {
        state,
        getter,
        action
    }
}

export type LanguageStateType = ReturnType<typeof languageState>
export const LanguageStateKey: InjectionKey<LanguageStateType> = Symbol(
    'LanguageState'
)

export default {};
