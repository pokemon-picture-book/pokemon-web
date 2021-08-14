import { computed, InjectionKey, reactive } from 'vue';
import { State, Getter, Action } from '@/types/stores/pokemon/game-version-group';
import repository from '@/plugins/http/api/game-version-groups';

export const gameVersionGroupState = () => {
    const state: State = reactive({
        gameVersionGroups: []
    });

    const getter: Getter = {
        gameVersionGroups: computed(() => state.gameVersionGroups)
    };

    const action: Action = {
        fetchAll: async (lang, supported) => {
            const { data } = await repository.findAll(lang, supported);
            state.gameVersionGroups = data || [];
        }
    };

    return {
        state,
        getter,
        action
    };
};

export type GameVersionGroupStateType = ReturnType<typeof gameVersionGroupState>;
export const GameVersionGroupStateKey: InjectionKey<GameVersionGroupStateType> = Symbol(
    'GameVersionGroupState'
);

export default {};
