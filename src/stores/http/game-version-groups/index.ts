import { computed, InjectionKey, reactive } from 'vue';
import http from '@/plugins/http';
import {
    GameVersionGroupResponse,
    State,
    Getter,
    Action
} from '@/stores/http/game-version-groups/type';

export const gameVersionGroupState = () => {
    const state: State = reactive({
        gameVersionGroups: []
    });

    const getter: Getter = {
        gameVersionGroups: computed(() => state.gameVersionGroups)
    };

    const action: Action = {
        fetchAll: async (lang, supported) => {
            const { data } = await http
                .get<GameVersionGroupResponse[]>('game-version-groups', {
                    params: { lang, supported }
                })
                .catch((err) => {
                    throw err;
                });
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
